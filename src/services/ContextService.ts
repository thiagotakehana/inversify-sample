// import { inject, injectable } from 'inversify';
// import { v4 } from 'uuid';
// import { CustomerController } from '../controllers/CustomerController';
// import { TYPES } from '../types';

// export interface IContextService {
//     setToken(token: string): void; 
//     getToken(): { token?: string};
// }

// // Mark the class as injectable so Inversify can manage its dependencies
// @injectable()
// class ContextService implements IContextService {
//     private uuid: string;

//     constructor(
//         @inject(TYPES.CustomerController) customerController: CustomerController,
//     )
//     {
//         this.uuid = `auth-${v4()}`;
//         console.log(`constructor AuthService > ${this.uuid}`);
//     }
// }

// export { ContextService };
