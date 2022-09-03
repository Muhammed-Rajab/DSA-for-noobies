function selectionSort(arr: number[]) {
    const swap = (arr: any[], i: number, j: number) =>
        ([arr[i], arr[j]] = [arr[j], arr[i]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++)
            lowest = arr[lowest] > arr[j] ? j : lowest;
        if (arr[i] > arr[lowest]) swap(arr, i, lowest);
    }
    return arr;
}

console.log(
    selectionSort([2, 3, 1, 123, 345, 3, 623423, 34, 56455, 34534, 6455])
);
