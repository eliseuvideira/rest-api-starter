import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './constants';

export const sign = async (token: Record<string, any>) =>
  new Promise((resolve, reject) =>
    jwt.sign(token, JWT_SECRET, (err, token) =>
      err ? reject(err) : resolve(token),
    ),
  );

export const verify = async (token: string) =>
  new Promise<string | Record<string, any>>((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, data) =>
      err ? reject(new Error('Invalid token')) : resolve(data),
    );
  });

export const decode = async (token: string) => {
  const data = await verify(token);
  if (!data || typeof data === 'string') {
    throw new Error('Unauthorized');
  }
  return data;
};
