import { endpoint } from '@ev-fns/endpoint';

export const getStatus = endpoint(async (req, res) => {
  res.status(204).end();
});
