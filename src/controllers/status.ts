import { controller } from '../functions/controller';

export const getStatus = controller(async (req, res) => {
  res.status(204).end();
});
