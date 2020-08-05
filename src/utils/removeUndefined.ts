export const removeUndefined = <T extends Record<string, unknown>>(
  object: T,
): T => {
  return Object.fromEntries(
    Object.entries(object).filter((entry) => entry[1] !== undefined),
  ) as any;
};
