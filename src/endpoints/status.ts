import { endpoint } from "@ev-fns/endpoint";

export const statusGet = endpoint(async (req, res) => {
  res.status(204).end();
});
