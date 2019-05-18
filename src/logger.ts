import { format, createLogger, transports } from 'winston';

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    transports: [
        new transports.File({ filename: 'combined.log' }),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.simple(),
                format.timestamp({ format: 'HH:mm:ss' })
            )
        })]
});


export default logger;