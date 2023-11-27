import express from 'express';

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
        if (ids.length > 1) {
            res.json({analysis_ids: ids});
        } else {
            res.json(ids); // solo
        }
    }
    next();
});

franklin.post('/v1/analyses/status', (req, res, next) => {
    const status = [];
    if (checkAuth(req, res)) {
        req.body.analysis_ids.forEach(id => {
            const a = runningAnalyses[id]
            if (!a) {
                res.status(404).send('unknown analysis ' + id);
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

const createRandomReadyAtDate = (from) => {
    const randomSeconds = (Math.floor(Math.random() * readySettings.max) + readySettings.min) * 1000 
    return new Date(from.getTime() + randomSeconds)
}

const getAnalysisStatus = (analysis) => new Date() > analysis.ready_at ? "READY" :"PROCESSING_ANNOTATION";


export default franklin;
