import { controller } from '../../src/utils/controller';

describe('controller', () => {
  it('wraps an request handler and call next with error', async () => {
    expect.assertions(1);
    const error = new Error('error');
    const controllerInstance = controller(async () => {
      await Promise.reject(error);
    });
    const fn = jest.fn();
    await controllerInstance(null as any, null as any, fn);
    expect(fn).toHaveBeenCalledWith(error);
  });

  it("doesn't do anything if no error found", async () => {
    expect.assertions(2);
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const controllerInstance = controller(async () => {
      fn2();
      await Promise.resolve();
    });
    await controllerInstance(null as any, null as any, fn1);
    expect(fn1).not.toHaveBeenCalled();
    expect(fn2).toHaveBeenCalled();
  });
});
