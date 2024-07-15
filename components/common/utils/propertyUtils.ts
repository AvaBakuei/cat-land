import _ from "lodash";
export const pickProperties = <T>(item: T, keys: (keyof T)[]): Pick<T, keyof T> => {
  return _.pick(item, keys) as Pick<T, keyof T>;
};
