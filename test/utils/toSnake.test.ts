import { toSnake } from '../../src/utils/toSnake';

describe('toSnake', () => {
  it('parses camel cased keys', () => {
    expect({
      customer_id: 1,
      name: 'customer',
      created_at: new Date('2020-08-09T00:15:51Z'),
      updated_at: new Date('2020-08-09T00:15:51Z'),
    }).toEqual(
      toSnake({
        customerId: 1,
        name: 'customer',
        createdAt: new Date('2020-08-09T00:15:51Z'),
        updatedAt: new Date('2020-08-09T00:15:51Z'),
      }),
    );
  });

  it('keep other keys intact', () => {
    expect({
      customer_id: 1,
      name: 'customer',
      created_at: new Date('2020-08-09T00:15:51Z'),
      updated_at: new Date('2020-08-09T00:15:51Z'),
    }).toEqual(
      toSnake({
        customer_id: 1,
        name: 'customer',
        created_at: new Date('2020-08-09T00:15:51Z'),
        updated_at: new Date('2020-08-09T00:15:51Z'),
      }),
    );
  });
});
