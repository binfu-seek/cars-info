import App from './app';
import VehicleController from './controllers/carController';
import { VehicleService } from './services/vehicleService'
import { VehicleRepo } from './repositories/vehicleRepository'
import config from 'config'

// Need to adopt 3rd party DI container
// to configure DI properly
const vehicleRepo = new VehicleRepo();
const vehicleService = new VehicleService(vehicleRepo)

const app = new App(
  [
    new VehicleController(vehicleService),
  ],
  config.get<number>('port')
);

app.listen();