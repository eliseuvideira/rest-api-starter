import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './constants';

export const sign = async (token: Record<string, any>) =>
  new Promise<string>((resolve, reject) =>
    jwt.sign(token, JWT_SECRET, (err, token) =>
      err ? reject(err) : resolve(token),
    ),
  );

export const decode = async (token: string) =>
  new Promise<Record<string, any>>((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, data) =>
      err ? reject(new Error('Invalid token')) : resolve(data),
    );
  });
