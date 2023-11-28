import express from 'express';
import fakeAnalysisJSON from './fakeAnalysis.js';
import get from 'lodash/get.js';

/**
 * https://api-docs.genoox.com/#2a24bb66-846d-4a97-8b53-6f283f8b51e1
 */

const franklin = express.Router();
const token_expiration = 3600;
const fakeToken = 'fake_token'
const runningAnalyses = {}
const readySettings = { // customize how many seconds for an analysis to be READY
    min: 30, max:60
}

const checkAuth = (req, res) => {
    const token = req.headers.authorization
    if (token !== ('Bearer ' + fakeToken)) {
        res.status(403).send('invalid token');
        return false;
    }
    return true;
}

franklin.get('/v1/auth/login', (req, res, next) => {
    if (!req.query.email || !req.query.password) {
        res.status(401).send('missing auth params');
    } else {
        res.json({
            token: fakeToken,
            duration: token_expiration,
            expires_at: Date.now() + token_expiration,
        });
    }
    next();
});

franklin.post('/v1/analyses/create', (req, res, next) => {
    if (checkAuth(req, res)) {
        const ids = []
        const now = new Date();
        req.body.analyses.forEach(a => {
            a.id = ++Object.keys(runningAnalyses).length
            a.created_at = now
            a.ready_at = createRandomReadyAtDate(now)
            runningAnalyses[a.id] = a
            ids.push(a.id)
        });
        const familyStudy = get(req.body, 'family_analyses[0].case_name')
        if (familyStudy) {
            ids.push(createFamilyAnalysisForTrio(familyStudy, now))  // create a custom family analysis
        }
        if (ids.length > 1) {
            res.json({analysis_ids: ids});
        } else {
            res.json(ids); // solo
        }
    }
    next();
});

franklin.post('/v1/analyses/status', (req, res, next) => {
    if (checkAuth(req, res)) {
        const status = [];
        req.body.analysis_ids.forEach(id => {
            const a = runningAnalyses[id]
            if (!a) {
                res.status(404).send('unknown analysis: ' + id);
            } else {
                status.push({
                    id: a.id,
                    name: a.sample_data.sample_name,
                    status: "ACTIVE",
                    processing_status: getAnalysisStatus(a),
                    created_at: a.created_at.toJSON().split('T')[0]
                })
            }
        })
        res.json(status);
    }
    next();
});

franklin.get('/v2/analysis/variants/snp', (req, res, next) => {
    if (checkAuth(req, res)) {
        const id = req.query.analysis_id
        const a = runningAnalyses[id]
        if (!a) {
            res.status(404).send('unknown analysis: ' + id);
        } else if (getAnalysisStatus(a) != 'READY'){
            res.status(400).send('analysis not ready: ' + id);
        } else {
            res.json(fakeAnalysisJSON);
        }
    }
    next();
});

const createFamilyAnalysisForTrio = (familyStudy, date) => {
    const analysis = {
        id: ++Object.keys(runningAnalyses).length,
        sample_data:{
            sample_name: familyStudy,
        },
        created_at: date,
        ready_at: createRandomReadyAtDate(date)
    };
    runningAnalyses[analysis.id] = analysis
    return analysis.id
}

const createRandomReadyAtDate = (from) => {
    const randomSeconds = (Math.floor(Math.random() * readySettings.max) + readySettings.min) * 1000 
    return new Date(from.getTime() + randomSeconds)
}

const getAnalysisStatus = (analysis) => new Date() > analysis.ready_at ? "READY" :"PROCESSING_ANNOTATION";


export default franklin;
