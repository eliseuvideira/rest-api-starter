import { RequestHandler } from 'express';

export const getStatus: RequestHandler = (req, res, next) => {
  try {
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
