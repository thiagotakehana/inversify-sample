import { injectable, inject } from 'inversify';
import { Request, Response } from 'express';
import { ICustomerService, IFactoryCustomerService } from '../interfaces';
import { TYPES } from '../types';
import { v4 } from 'uuid'

// Mark the class as injectable and specify its dependencies
@injectable()
class CustomerController {
    // private _customerService: ICustomerService;
    public uuid: string;

    // Use @inject to tell Inversify which dependency to inject
    constructor(
        @inject(TYPES.CustomerService) 
        private customerService: ICustomerService,

        // @inject(TYPES.FactoryCustomerService) 
        // private customerService: () => IFactoryCustomerService,
    )
    {
        // this._customerService = customerService;
        this.uuid = `ctl-${v4()}`;
        console.log(`constructor CustomerController > ${this.uuid}`);
    }

    /**
     * Express route handler to get a customer by ID.
     * @param req Express Request object.
     * @param res Express Response object.
     */
    public getCustomer = (req: any, res: Response): void => {
        console.log(`request > ${this.uuid} / ${req.uuid}`);
        // console.log(`request > ${this.uuid} / ${req.uuid} / reqauth ${req.authService.getToken().token}`);
        const customerId = req.params.id;
        if (!customerId) {
            res.status(400).json({ message: 'Customer ID is required.' });
            return;
        }
        console.log(JSON.stringify(this.customerService));
        const customer = this.customerService.getCustomerById(customerId);
        res.json(customer);
    };
}

export { CustomerController };