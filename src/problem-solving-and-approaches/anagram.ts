const anagram = (s1: string, s2: string): boolean => {
    if (s1.length !== s2.length) return false;

    const s1Obj: { [key: string]: number } = {};
    const s2Obj: { [key: string]: number } = {};

    for (let i = 0; i < s1.length; i++) {
        // O(N)
        const a = s1[i];
        const b = s2[i];

        s1Obj[a] = s1Obj[a] === undefined ? 1 : s1Obj[a] + 1;
        s2Obj[b] = s2Obj[b] === undefined ? 1 : s2Obj[b] + 1;
    }

    for (const key in s1Obj) {
        if (s1Obj[key] !== s2Obj[key]) return false;
    }

    return true;
};

console.log(anagram("ab", "b"));
console.log(anagram("Hannah", "Hhaann"));
console.log(anagram("Rajab", "bajaR"));
console.log(anagram("shit", "hits"));
