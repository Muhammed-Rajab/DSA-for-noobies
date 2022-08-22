const countUniqueValues1 = (arr: number[]) => new Set(arr).size;

const countUniqueValues2 = (arr: number[]) => {
    if (arr.length === 0) return 0;

    if (arr.length === 1) return 1;

    let count: number = 1;

    for (let i: number = 1; i < arr.length; i++) {
        let curr: number = arr[i];
        let prev: number = arr[i - 1];

        if (curr !== prev) {
            count++;
        }
    }

    return count;
};

console.log(countUniqueValues1([1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues1([]));
console.log(countUniqueValues1([-2, -1, -1, 0, 1]));
console.log(countUniqueValues1([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

console.log(countUniqueValues2([1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues2([]));
console.log(countUniqueValues2([-2, -1, -1, 0, 1]));
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
