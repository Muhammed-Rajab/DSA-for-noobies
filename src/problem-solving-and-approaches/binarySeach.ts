const BS = (arr: number[], num: number) => {
    if (arr.length === 0) return -1;

    let min = 0,
        max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let curr = arr[middle];

        if (curr < num) min = middle + 1;
        else if (curr > num) max = middle - 1;
        else return middle;
    }
    return -1;
};

console.log(BS([1, 2, 3, 4, 5], 4));
