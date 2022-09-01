const productOfArray = (arr: number[]): number => {
    if (arr.length === 0) return 1;
    return (arr.pop() || 1) * productOfArray(arr);
};
// console.log(productOfArray([3, 1, 2, 4, 5]));

const fib = (n: number): number => {
    if (n === 0 || n === 1) return n;

    return fib(n - 1) + fib(n - 2);
};

for (let i = 0; i < 10; i++) console.log(fib(i));
