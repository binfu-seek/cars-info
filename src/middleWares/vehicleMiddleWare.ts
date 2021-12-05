import express from 'express'
import logger from '../utils/logger'
export class VehicleMiddleWare {
    public static logRequest(request: express.Request, response: express.Response, next: express.NextFunction) {
        logger.info(`${request.method} - ${request.path}`);
        next();
    }
}