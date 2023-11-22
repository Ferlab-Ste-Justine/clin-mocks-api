import logger from '../utils/logger.js';

const logIfPresent = (name, obj) => {
    if (obj && Object.keys(obj).length) {
        logger.info(`${name}: ${JSON.stringify(obj)}`);
    }
};

const handler = (req, res, next) => {
    logger.info(`=> [${req.method}] ${req.url}`);
    //logIfPresent('    └> Query', req.query); seems to be part of req.url to enabled if not in QA
    logIfPresent('    └> Body', req.body);
    next();
};

export default handler;
