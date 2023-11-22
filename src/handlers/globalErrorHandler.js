import logger from '../utils/logger.js';

const handler = (err, req, res, next) => {
    if (err) {
        // log + hide error from user
        logger.error(err.stack);
        res.status(500).send('internal server error');
    }
    next();
};

export default handler;
