import { toCamel } from '../../src/utils/toCamel';

describe('toCamel', () => {
  it('parses snaked cased keys', () => {
    expect({
      customerId: 1,
      name: 'customer',
      createdAt: new Date('2020-08-09T00:15:51Z'),
      updatedAt: new Date('2020-08-09T00:15:51Z'),
    }).toEqual(
      toCamel({
        customer_id: 1,
        name: 'customer',
        created_at: new Date('2020-08-09T00:15:51Z'),
        updated_at: new Date('2020-08-09T00:15:51Z'),
      }),
    );
  });

  it('keep other keys intact', () => {
    expect({
      customerId: 1,
      name: 'customer',
      createdAt: new Date('2020-08-09T00:15:51Z'),
      updatedAt: new Date('2020-08-09T00:15:51Z'),
    }).toEqual(
      toCamel({
        customerId: 1,
        name: 'customer',
        createdAt: new Date('2020-08-09T00:15:51Z'),
        updatedAt: new Date('2020-08-09T00:15:51Z'),
      }),
    );
  });
});
