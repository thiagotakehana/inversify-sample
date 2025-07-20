import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      uuid?: string; // Or string, if it's always present
    }
  }
}