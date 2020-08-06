import { RequestHandler } from 'express';
import { HttpError } from '../utils/HttpError';
import { decode } from '../utils/jwt';

const TOKEN_PREFIX = 'Bearer ';
const SLICE_LENGTH = TOKEN_PREFIX.length;

export const auth: RequestHandler = async (req, res, next) => {
  try {
    const { authorization: auth } = req.headers;
    if (!auth || !auth.startsWith(TOKEN_PREFIX)) {
      res.set('WWW-Authenticate', 'Bearer');
      throw new HttpError(401, 'Unauthorized');
    }
    const token = auth.slice(SLICE_LENGTH);

    try {
      req.token = await decode(token);
    } catch (err) {
      err.status = 401;
      throw err;
    }

    next();
  } catch (err) {
    next(err);
  }
};
