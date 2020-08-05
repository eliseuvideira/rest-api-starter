export const removeKeys = <T>(obj: T, keys: (keyof T)[]): T => {
  const newObj = { ...obj };
  keys.forEach((key) => delete newObj[key]);
  return newObj;
};
