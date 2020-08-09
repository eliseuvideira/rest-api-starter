export const camelToSnake = (key: string): string =>
  key.replace(
    /([a-z])([A-Z])/g,
    (_, lower, upper) => `${lower}_${upper.toLowerCase()}`,
  );

export const toSnake = (original: Record<string, any>): Record<string, any> =>
  Object.keys(original).reduce(
    (copy, key) => ({ ...copy, [camelToSnake(key)]: original[key] }),
    {},
  );
