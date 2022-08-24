// function factorial(num: number): number {
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }

const factorial = (num: number): number =>
    num === 0 || num === 1 ? 1 : num * factorial(num - 1);

console.log(factorial(5));

/*
    fact(4)
        return 4 * fact(4 - 1)
                        return 3 * fact(3 - 1)
                                        return 2  * fact(2 - 1)
                                                        return 1
*/
