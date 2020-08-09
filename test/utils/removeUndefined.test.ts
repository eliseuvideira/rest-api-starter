import { removeUndefined } from '../../src/utils/removeUndefined';

describe('removeUndefined', () => {
  it('removes keys with undefined values', () => {
    expect({
      $eq: { customerId: 1, name: 'customer' },
    }).toEqual(
      removeUndefined({
        $eq: { customerId: 1, name: 'customer' },
        $like: undefined,
        $sort: undefined,
      }),
    );
  });

  it('keeps all keys if no undefined', () => {
    expect({
      customerId: 1,
      name: 'customer',
    }).toEqual(
      removeUndefined({
        customerId: 1,
        name: 'customer',
      }),
    );
  });
});
