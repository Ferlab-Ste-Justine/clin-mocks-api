import winston, { format } from 'winston';
import { LOG_LEVEL } from './config.js';

const loggerFormat = format.printf(
    ({ level, message, timestamp }) => `${timestamp} ${level.toUpperCase()} : ${message}`,
);

const logger = winston.createLogger({
    level: LOG_LEVEL,
    format: format.combine(format.timestamp(), loggerFormat),
    transports: [new winston.transports.Console()],
});

export default logger;
