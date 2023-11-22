import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3001;
export const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
