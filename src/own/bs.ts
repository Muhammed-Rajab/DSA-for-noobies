const BS_ = (arr: number[], value: number) => {
    if (arr.length === 0) return -1;

    let minIdx = 0,
        maxIdx = arr.length - 1;

    while (minIdx <= maxIdx) {
        const middleIdx = Math.floor((minIdx + maxIdx) / 2);
        const currEl = arr[middleIdx];

        if (currEl < value) minIdx = middleIdx + 1;
        else if (currEl > value) maxIdx = middleIdx - 1;
        else return middleIdx;
    }
    return -1;
};

console.log(BS_([1, 2, 3, 4, 5], 1));
