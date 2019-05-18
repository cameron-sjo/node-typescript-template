import * as dotenv from 'dotenv';
import logger from './src/logger';

const config = dotenv.config();

if (config.error) {
    throw config.error;
}

async function main(): Promise<void> {
    try {

    }
    catch (error) {
        logger.error(error);
    }
}

main().finally(console.log);