const pow = (base: number, exp: number): number => {
    if (exp === 1) return base;
    return base * pow(base, exp - 1);
};

console.log(`${BigInt(pow(2, 1000))}`);
