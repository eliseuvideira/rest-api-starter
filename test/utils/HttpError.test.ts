import { HttpError, isHttpError } from '../../src/utils/HttpError';

describe('HttpError', () => {
  it('is an instance of Error with status code key', () => {
    const error = new HttpError(400, 'Bad request');

    expect(error instanceof Error).toBe(true);
    expect(error.status).toBe(400);
  });
});

describe('isHttpError', () => {
  it('identifies HttpError instances', () => {
    expect(isHttpError(new HttpError(400, 'Bad request'))).toBe(true);
    const error: any = new Error('Bad request');
    error.status = 400;
    expect(isHttpError(error)).toBe(true);
    expect(isHttpError(new Error('Bad request'))).toBe(false);
    expect(isHttpError({ message: 'Bad request', status: 400 })).toBe(true);
  });
});
