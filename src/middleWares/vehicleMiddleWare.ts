import express from 'express'
import logger from '../utils/logger'

function logRequest(request: express.Request, response: express.Response, next: express.NextFunction) {
    logger.info(`${request.method} - ${request.path}`);
    next();
}

export default logRequest;