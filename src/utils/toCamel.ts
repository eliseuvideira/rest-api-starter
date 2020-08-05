export const snakeToCamel = (key: string): string =>
  key.replace(/_(.?)/g, (_, letter) => letter.toUpperCase());

const mapKeys = (object: any, result: any) => {
  return (key: string): void => {
    result[snakeToCamel(key)] = object[key];
  };
};

export const toCamel = (object: any): any => {
  const result: any = {};
  Object.keys(object).forEach(mapKeys(object, result));
  return result;
};
