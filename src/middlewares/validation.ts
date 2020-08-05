import { ObjectSchema } from 'joi';
import { RequestHandler } from 'express';
import { HttpError } from '../utils/HttpError';

const createRequestValidate = (key: 'body' | 'params' | 'query') => {
  return (schema: ObjectSchema): RequestHandler => {
    return (req, _res, next): void => {
      try {
        const validationResult = schema.validate(req[key]);
        if (validationResult.error) {
          throw new HttpError(400, validationResult.error.message);
        }
        req[key] = validationResult.value;
        next();
      } catch (err) {
        next(err);
      }
    };
  };
};

export const body = createRequestValidate('body');

export const query = createRequestValidate('query');

export const params = createRequestValidate('params');
