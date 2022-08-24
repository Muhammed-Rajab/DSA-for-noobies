const checkOdd = (arr: number[]): any => {
    if (arr.length === 0) return false;
    if (arr[0] % 2 === 1) return true;
    return checkOdd(arr.slice(1, arr.length));
};

console.log(checkOdd([2, 4, 8]));

const countDown = (num: number): void => {
    if (num === -1) return console.log("Boom💥💥!");

    console.log(num);

    return countDown(num - 1);
};

countDown(10);

const sumRange = (num: number): number => {
    if (num === 1) return 1;

    return num + sumRange(num - 1);
};

console.log(sumRange(3));
