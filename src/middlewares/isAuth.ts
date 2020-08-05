import { RequestHandler } from 'express';
import { HttpError } from '../utils/HttpError';
import { verify } from 'jsonwebtoken';

const verifyToken = (token: string, secret: string): ObjectWithAnyProps => {
  let data: string | Record<string, any>;
  try {
    data = verify(token, secret);
  } catch (err) {
    err.status = 401;
    throw err;
  }
  if (!data || typeof data === 'string') {
    throw new HttpError(401, 'Unauthorized');
  }
  return data;
};

const getSecret = (): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET not set');
  }
  return secret;
};

export const isAuth: RequestHandler = (req, res, next) => {
  try {
    const auth = req.get('Authorization');
    if (!auth || !auth.startsWith('Bearer ')) {
      res.set('WWW-Authenticate', 'Bearer');
      throw new HttpError(401, 'Unauthorized');
    }
    const token = auth.slice(7, auth.length);
    const secret = getSecret();
    req.token = verifyToken(token, secret);
    next();
  } catch (err) {
    next(err);
  }
};
