import App from './app';
import VehicleController from './controllers/carController';
import { VehicleService } from './services/vehicleService'
import { VehicleRepo } from './repositories/vehicleRepository'

// Need to adopt 3rd party DI container
// to configure DI properly
const vehicleRepo = new VehicleRepo();
const vehicleService = new VehicleService(vehicleRepo)

const app = new App(
  [
    new VehicleController(vehicleService),
  ],
  5000, // need to move to env config file
);

app.listen();