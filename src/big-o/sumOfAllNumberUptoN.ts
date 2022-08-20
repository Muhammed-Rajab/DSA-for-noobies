const sumUptoI1 = (n: number): number => {
    let sum: number = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
};

const sumUptoI2 = (n: number): number => {
    return (n * (n + 1)) / 2;
};

// Test cases
const N = 1_000_000_000;

const startT1 = performance.now();
console.log(sumUptoI1(N));
const endT1 = performance.now();
console.log(`It took ${(endT1 - startT1) / 1000} seconds`);

const startT2 = performance.now();
console.log(sumUptoI2(N));
const endT2 = performance.now();
console.log(`It took ${(endT2 - startT2) / 1000} seconds`);
