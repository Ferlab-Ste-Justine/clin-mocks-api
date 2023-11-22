import express from 'express';

const franklin = express.Router();

franklin.get('/', (req, res, next) => {
    res.json({ foo: 'GET' });
    next();
});

franklin.post('/', (req, res, next) => {
    res.json({ foo: 'POST' });
    next();
});

export default franklin;
