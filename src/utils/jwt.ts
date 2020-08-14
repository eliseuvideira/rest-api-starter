import jwt from 'jsonwebtoken';

export const sign = async (token: Record<string, any>, secret: string) =>
  new Promise<string>((resolve, reject) =>
    jwt.sign(token, secret, (err, token) =>
      err ? reject(err) : resolve(token),
    ),
  );

export const decode = async (token: string, secret: string) =>
  new Promise<Record<string, any>>((resolve, reject) => {
    jwt.verify(token, secret, (err, data) =>
      err ? reject(new Error('Invalid token')) : resolve(data),
    );
  });
