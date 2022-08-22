// Approach #1
const same1 = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) return false; // O(1)

    const sortedArr1 = arr1.sort((a, b) => a - b); // O(N)
    const sortedArr2 = arr2.sort((a, b) => a - b); // O(N)

    for (
        let i = 0;
        i < sortedArr1.length;
        i++ // O(N)
    )
        if (Math.pow(sortedArr1[i], 2) !== sortedArr2[i]) return false;

    // Time complexity: 3*O(N) + O(1) = O(3N) + O(1) = O(3N + 1) = O(N)
    return true;
};

// Approach #2
const same2 = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) return false; // O(1)

    const arr1Obj: { [key: number]: number } = {};
    const arr2Obj: { [key: number]: number } = {};

    for (let i = 0; i < arr1.length; i++) {
        // O(N)
        const a = arr1[i];
        const b = arr2[i];

        arr1Obj[a] = !arr1Obj[a] ? 1 : arr1Obj[a] + 1;
        arr2Obj[b] = !arr2Obj[b] ? 1 : arr2Obj[b] + 1;
    }

    for (const ch in arr1Obj) {
        // O(N)
        const key1 = +ch;
        const key2 = Math.pow(key1, 2);

        if (arr1Obj[key1] !== arr2Obj[key2]) return false;
    }

    console.log(arr1Obj, arr2Obj);
    return true;
};

console.log(same1([1, 2, 1], [4, 1, 1]));
console.log(same1([1, 3, 2, 2], [9, 1, 4, 4]));

console.log(same2([1, 2, 1], [4, 1, 1]));
console.log(same2([1, 3, 2, 2], [9, 1, 4, 4]));
