export const snakeToCamel = (key: string): string =>
  key.replace(/_(.)/g, (_, letter) => letter.toUpperCase());

export const toCamel = (original: Record<string, any>): Record<string, any> =>
  Object.keys(original).reduce(
    (copy, key) => ({ ...copy, [snakeToCamel(key)]: original[key] }),
    {},
  );
