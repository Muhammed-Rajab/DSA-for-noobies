const maxSubArraySum = (arr: number[], n: number) => {
    if (arr.length < n || arr.length === 0) return null;

    let maxSum = 0,
        tempSum = 0;

    // Sum of all nums in the array
    for (let i = 0; i < n; i++) maxSum += arr[i];

    tempSum = maxSum;

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
};

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
