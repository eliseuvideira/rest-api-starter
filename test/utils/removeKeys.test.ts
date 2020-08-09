import { removeKeys } from '../../src/utils/removeKeys';

describe('removeKeys', () => {
  it('removes keys', () => {
    expect({
      customerId: 1,
      name: 'customer',
    }).toEqual(
      removeKeys(
        {
          customerId: 1,
          name: 'customer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        ['createdAt', 'updatedAt'],
      ),
    );
  });
});
