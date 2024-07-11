import _ from "lodash";
export function pickProperties<T>(
    dataList: T[],
    keys: (keyof T)[]
): Pick<T, keyof T>[] {
    return dataList.map((item) => _.pick(item, keys) as Pick<T, keyof T>);
}
