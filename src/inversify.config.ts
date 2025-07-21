import { Container, ResolutionContext, Factory } from 'inversify';
import { TYPES } from './types';
import { ICustomerService, IFactoryCustomerService } from './interfaces';
import { CustomerService } from './services/CustomerService';
import { CustomerController } from './controllers/CustomerController';
import { AuthService, IAuthService } from './services/AuthService';

// Create a new Inversify container
const container = new Container();

// Bind the ICustomerService interface to its implementation, CustomerService.
// .inSingletonScope() ensures that only one instance of CustomerService is created
// and reused throughout the application.
container.bind<ICustomerService>(TYPES.CustomerService).to(CustomerService).inSingletonScope();

// container.bind<IFactoryCustomerService>(TYPES.FactoryCustomerService)
//     .toDynamicValue((): ICustomerService => {
//         return container.get<ICustomerService>(TYPES.CustomerService);
//     });

// container.bind<Factory<IFactoryCustomerService>>(TYPES.FactoryCustomerService)
//     .toFactory((context: ResolutionContext) => {
//         console.log(JSON.stringify(context));
//         const customerService = context.get<ICustomerService>(TYPES.CustomerService);
//         return () => customerService;
//     });

// Bind the CustomerController.
// It will automatically resolve its dependencies (CustomerService) based on the bindings.
container.bind<CustomerController>(TYPES.CustomerController).to(CustomerController).inSingletonScope();

container.bind<IAuthService>(TYPES.AuthService).to(AuthService).inSingletonScope();


export { container };