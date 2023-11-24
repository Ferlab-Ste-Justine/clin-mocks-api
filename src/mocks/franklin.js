import express from 'express';

/**
 * https://api-docs.genoox.com/#2a24bb66-846d-4a97-8b53-6f283f8b51e1
 */

const franklin = express.Router();
const token_expiration = 3600;
const fakeToken = 'fake_token'
const runningAnalyses = {}

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
    const token = req.headers.authorization
    if (token !== ('Bearer ' + fakeToken)) {
        res.status(403).send('invalid token');
    } else{
        const ids = []
        req.body.analyses.forEach(a => {
            a.id = ++Object.keys(runningAnalyses).length
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

export default franklin;
