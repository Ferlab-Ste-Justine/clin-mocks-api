import logger from '../utils/logger.js';

const handler = (req, res, next) => {
    logger.info(`<= [${req.method}] ${req.url}`);
    logger.info('    └> Body', JSON.stringify(res.body));
    next();
};

export default handler;
