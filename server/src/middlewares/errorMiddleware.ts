import ApiError from '@exceptions/ApiError';
import { Request, Response, NextFunction } from 'express';

const errorMiddleware = function (err: Error | ApiError, req: Request, res: Response, next: NextFunction): any {
  console.log(err);

  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, errors: err.errors });
  }

  return res.status(500).json({ message: 'Неизвестная ошибка' });
};

export default errorMiddleware;
