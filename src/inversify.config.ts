import { Container } from 'inversify';
import { TYPES } from './types';
import { ICustomerService } from './interfaces';
import { CustomerService } from './services/CustomerService';
import { CustomerController } from './controllers/CustomerController';
import { AuthService, IAuthService } from './services/AuthService';

// Create a new Inversify container
const container = new Container();

// Bind the ICustomerService interface to its implementation, CustomerService.
// .inSingletonScope() ensures that only one instance of CustomerService is created
// and reused throughout the application.
container.bind<ICustomerService>(TYPES.CustomerService).to(CustomerService).inRequestScope();

// Bind the CustomerController.
// It will automatically resolve its dependencies (CustomerService) based on the bindings.
container.bind<CustomerController>(TYPES.CustomerController).to(CustomerController).inRequestScope();

container.bind<IAuthService>(TYPES.AuthService).to(AuthService).inRequestScope();

export { container };