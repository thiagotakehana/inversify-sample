import 'reflect-metadata'; // Required for InversifyJS decorators
import express, { Request, Response, NextFunction } from 'express';
import { container } from './inversify.config';
import { CustomerController } from './controllers/CustomerController';
import { TYPES } from './types';
// import { authenticateToken } from './middleware/authMiddleware';
import { v4 } from 'uuid';
import { IAuthService } from './services/AuthService';

const app = express();
const port = 3000;

// Get an instance of CustomerController from the Inversify container.
// Inversify will automatically inject the CustomerService into the controller.
const customerController = container.get<CustomerController>(TYPES.CustomerController);
const authenticateToken = (req: any, res: Response, next: NextFunction): void => {

    const authService = container.get<IAuthService>(TYPES.AuthService);
    const authHeader = req.headers['authorization'];
    
    authService.setToken(JSON.stringify(authHeader));
    req.uuid = `req-${v4()}`;

    next();
};
// authenticateToken.bind(this);

// Define the GET endpoint for customers
app.get('/customer/:id', authenticateToken, customerController.getCustomer);

// Start the Express server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

