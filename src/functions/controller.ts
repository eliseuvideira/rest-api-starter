import { RequestHandler } from 'express';

export const controller = (handler: RequestHandler): RequestHandler => async (
  req,
  res,
  next,
) => {
  try {
    await handler(req, res, next);
  } catch (err) {
    next(err);
  }
};
