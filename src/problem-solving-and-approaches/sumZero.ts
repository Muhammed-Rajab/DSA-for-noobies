const sumZero1 = (arr: number[]) => {
    const SUM: number = 0;

    /*
        Find the first pair of array where the sum is SUM.
        Return an array including both the values of undefined if the pair Doesn't exist.
    */

    for (let i = 0; i < arr.length; i++) {
        // O(N)
        for (
            let j = i + 1;
            j < arr.length;
            j++ // O(N)
        )
            if (arr[i] + arr[j] === SUM) return [arr[i], arr[j]];
    }
    // Time Complexity ->  O(N) * O(N) = O(N^2)
    return undefined;
};

const sumZero2 = (arr: number[]) => {
    const SUM: number = 0;

    /*
        Find the first pair of array where the sum is SUM.
        Return an array including both the values of undefined if the pair Doesn't exist.
    */
    let left = 0,
        right = arr.length - 1;

    while (left < right) {
        const x = arr[left];
        const y = arr[right];

        if (x + y === SUM) return [x, y];

        if (x + y < SUM) left++;
        if (x + y > SUM) right--;
    }
    return undefined;
};

console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]));
