import { injectable, inject } from 'inversify';
import { Request, Response } from 'express';
import { ICustomerService } from '../interfaces';
import { TYPES } from '../types';
import { v4 } from 'uuid'

// Mark the class as injectable and specify its dependencies
@injectable()
class CustomerController {
    private _customerService: ICustomerService;
    public uuid: string;

    // Use @inject to tell Inversify which dependency to inject
    constructor(
        @inject(TYPES.CustomerService) customerService: ICustomerService)
    {
        this._customerService = customerService;
        this.uuid = `ctl-${v4()}`;
        console.log(`constructor CustomerController > ${this.uuid}`);
    }

    /**
     * Express route handler to get a customer by ID.
     * @param req Express Request object.
     * @param res Express Response object.
     */
    public getCustomer = (req: Request, res: Response): void => {
        console.log(`request > ${this.uuid} / ${req.uuid}`);
        const customerId = req.params.id;
        if (!customerId) {
            res.status(400).json({ message: 'Customer ID is required.' });
            return;
        }
        const customer = this._customerService.getCustomerById(customerId);
        res.json(customer);
    };
}

export { CustomerController };