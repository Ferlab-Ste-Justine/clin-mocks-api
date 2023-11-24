import logger from '../utils/logger.js';

const handler = (req, res, next) => {
    logger.info(`<= [${req.method}] ${req.url}`);
    next();
};

export default handler;
