import express from 'express'
import logger from './utils/logger'
import logRequest from './middleWares/vehicleMiddleWare'
import errorHandler from './middleWares/errorHandlerMiddleWare';

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: any[], port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(logRequest);
    this.app.use(errorHandler);
  }

  private initializeControllers(controllers: any[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
        logger.info(`App is running on port ${this.port}`);
    });
  }
}

export default App;