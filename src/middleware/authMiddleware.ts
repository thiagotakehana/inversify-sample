// import { Request, Response, NextFunction } from 'express';
// import { v4 } from 'uuid';

// /**
//  * Middleware to check for a valid JWT token and set isAuthenticated flag.
//  * @param req Express Request object.
//  * @param res Express Response object.
//  * @param next Express NextFunction.
//  */
// const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
//     // const authHeader = req.headers['authorization'];
//     // const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

//     req.uuid = `req-${v4()}`;

//     next();
// };

// export { authenticateToken };