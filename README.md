# CarsInfo_nodeJs

### Introduction
   - This is a backend application written in Typescript, node.js and express.
   - It implemented a few Rest API endpoints that support http GET call.
   - Currently it does not configure a real database connection or using any in-memory database. The data is mocked inside the repository class.

### The structure
  - The structure of the code has a few layers: repository, service, controller
  - The repository layer focuses on data access
  - The service layer focuses on prosessing business logic using the data access from repository as an ingredience
  - The controller layer focuses on processing processing client requests

### Features included in the implementation
  - The concept of Dependency Injection is adopted, but not using any 3rd party DI container at the moment.
  - Middlewares to do the logging of incoming requests and error handling job
  -
  
### Jobs yet to be done
   - Unit test to be added
