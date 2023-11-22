import express from 'express';

const sample = express.Router();

sample.get('/', (req, res, next) => {
    res.json({ foo: 'bar' });
    next();
});

sample.post('/', () => {
    throw new Error('something bad');
});

export default sample;
