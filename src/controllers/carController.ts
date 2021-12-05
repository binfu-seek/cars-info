import express, { json } from 'express';
import VehicleException from '../exceptions/vehicleException';
import { IVehicleService } from '../services/IVehicleService';

class VehicleController {
  private path = '/';
  private router = express.Router();
  private vehicleService: IVehicleService;

  constructor(vehicleService: IVehicleService) {
    this.vehicleService = vehicleService;
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(`${this.path}welcome`, this.welcome);
    this.router.get(`${this.path}totalNum`, this.getTotalNumber);
    this.router.get(`${this.path}existingTypes`, this.getExistingTypes);
    this.router.get(`${this.path}favType`, this.getExistingTypes);
  }

  public async welcome(request: express.Request, response: express.Response) {
    response.send('Welcome');
  }

    getTotalNumber = async (request: express.Request, response: express.Response) => {
        try {
            const totalNum = await this.vehicleService.getTotalNumberOfVehicles();
            response.status(200).json(totalNum)
        } catch(ex: any) {
            throw new VehicleException(500, ex.error || 'Error retrieving total number of vehicles in the area!');
        }
    }

    getExistingTypes = async (request: express.Request, response: express.Response) => {
        try {
            const vehicleTypes = await this.vehicleService.getExistingVecleTypes();
            response.json(vehicleTypes);
        } catch(ex: any) {
            throw new VehicleException(500, ex.error || 'Error retrieving existing vehicle types in the area!');
        }
    }

    getMostPreferedVehicleType = async (request: express.Request, response: express.Response) => {
        try {
            const vehicleType = await this.vehicleService.getMostPreferedVehicleType();
            response.json(vehicleType);
        } catch(ex: any) {
            throw new VehicleException(500, ex.error || 'Error getting most prefered vehicle type in the area!');
        }
    }
}

export default VehicleController;