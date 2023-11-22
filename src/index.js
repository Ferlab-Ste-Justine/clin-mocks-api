import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { PORT } from './utils/config.js';
import logger from './utils/logger.js';
import globalErrorHandler from './handlers/globalErrorHandler.js';
import requestLogger from './handlers/requestLogger.js';
import responseLogger from './handlers/responseLogger.js';
import sampleMocks from './mocks/sample.js';
import franklinMocks from './mocks/franklin.js';

const app = express();
logger.debug('Add handler: JSON');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
logger.debug('Add handler: compression');
app.use(compression());
logger.debug('Add handler: cors');
app.use(cors());

// use for k8s health check, before logger
app.get('/health', (req, res) => res.status(200).json({ status: 'UP' }));

logger.debug('Add handler: request logger');
app.use(requestLogger);

logger.info('Add mocks endpoints: Sample');
app.use('/api/sample', sampleMocks);
logger.info('Add mocks endpoints: Franklin');
app.use('/api/franklin', franklinMocks);

logger.debug('Add handler: response logger');
app.use(responseLogger);

logger.debug('Add handler: global error');
app.use(globalErrorHandler);

if (process.env['NODE_ENV'] !== 'test') {
    app.listen(PORT, () => {
        logger.info(`Server is running on port ${PORT}`);
    });
}

export default app;
