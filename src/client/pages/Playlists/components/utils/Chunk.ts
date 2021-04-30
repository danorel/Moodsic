export function chunker<T>(arr: T[], factor: number): T[][] {
    const chunksArr: T[][] = [];
    for (let i = 0; i < arr.length; i += factor) chunksArr.push(arr.slice(i, i + factor));
    return chunksArr;
}
