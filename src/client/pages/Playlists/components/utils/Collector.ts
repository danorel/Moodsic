export function collector<T>(arr: T[][], factor: number): (T | null)[][] {
    if (!arr.length) return [];

    const last = arr.length - 1;

    return [...[...arr.slice(0, last)], [...arr[last], ...new Array(factor - arr[last].length).map(_ => null)]];
}
