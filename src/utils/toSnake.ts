export const camelToSnake = (key: string): string =>
  key.replace(
    /([a-z])([A-Z])/g,
    (_, lower, upper) => `${lower}_${upper.toLowerCase()}`,
  );

const mapKeys = (object: any, result: any) => {
  return (key: string): void => {
    result[camelToSnake(key)] = object[key];
  };
};

export const toSnake = (object: any): any => {
  const result: any = {};
  Object.keys(object).forEach(mapKeys(object, result));
  return result;
};
