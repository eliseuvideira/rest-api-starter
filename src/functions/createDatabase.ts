import Knex from 'knex';

const MIN_POOL = 2;
const MAX_POOL = 20;

type CreateDatabaseProps = Pick<Knex.Config, 'client' | 'connection'>;

export const createDatabase = ({
  client = 'pg',
  connection,
}: CreateDatabaseProps) =>
  Knex({
    client,
    connection,
    pool: {
      min: MIN_POOL,
      max: MAX_POOL,
    },
  });
