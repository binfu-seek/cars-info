import express from 'express'
import logger from '../utils/logger'
import VehicleException from '../exceptions/vehicleException';

function errorHandler(ex: VehicleException, request: express.Request, response: express.Response, next: express.NextFunction) {
    logger.info(`${request.method} - ${request.path}`);
    response.status(ex.status || 500).json({status: ex.status, message: ex.message});
}

export default errorHandler;