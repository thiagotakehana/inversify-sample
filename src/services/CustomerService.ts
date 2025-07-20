import { inject, injectable } from 'inversify';
import { ICustomerService } from '../interfaces';
import { v4 } from 'uuid';
import { IAuthService } from './AuthService';
import { TYPES } from '../types';

// Mark the class as injectable so Inversify can manage its dependencies
@injectable()
class CustomerService implements ICustomerService {
    public uuid: string;
    private authService: IAuthService;

    constructor(
        @inject(TYPES.AuthService) authService: IAuthService,
    ){
        this.uuid = v4();
        this.authService = authService;
        console.log(`Constructor CustomerService > ${this.uuid}`);
    }
    /**
     * Retrieves customer data by ID.
     * In a real application, this would interact with a database.
     * @param id The ID of the customer.
     * @returns Customer data.
     */
    public getCustomerById(id: string): { id: string; name: string; email: string } {
        // Simulate fetching customer data
        console.log(`Fetching customer with ID: ${id}`);
        console.log(`AUTH >>> ${this.authService.getToken().token}`)
        if (id === '1') {
            return { id: '1', name: 'Alice Smith', email: 'alice.smith@example.com' };
        } else if (id === '2') {
            return { id: '2', name: 'Bob Johnson', email: 'bob.johnson@example.com' };
        }
        return { id: id, name: 'Unknown Customer', email: 'unknown@example.com' };
    }
}

export { CustomerService };
