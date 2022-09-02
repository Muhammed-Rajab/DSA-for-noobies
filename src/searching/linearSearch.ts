const LinearSearch = <T>(arr: T[], val: T) => {
    // O(N)
    for (const [idx, curr] of arr.entries()) if (curr === val) return idx;

    return -1;
};

console.log(LinearSearch([1, 2, 3, 4], 4));
console.log(
    LinearSearch<string>(["Rajab", "Jefrin", "Aijas", "Shaun"], "Shaun")
);
console.log(
    LinearSearch<string>(["Rajab", "Jefrin", "Aijas", "Shaun"], "Aijas")
);
