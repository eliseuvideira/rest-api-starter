import { RequestHandler, ErrorRequestHandler } from 'express';
import { HttpError, isHttpError } from '../utils/HttpError';

const notFound: RequestHandler = (_req, _res, next) => {
  next(new HttpError(404, 'Resource not found'));
};

const exception: ErrorRequestHandler = (err, _req, res, _next) => {
  const status = isHttpError(err) ? err.status : 500;
  let message: string = err.message;
  if (status === 500) {
    console.error(err);
    if (process.env.NODE_ENV === 'production') {
      message = 'Internal server error';
    }
  }
  res.status(status).json({ error: { message } });
};

export { notFound, exception };
