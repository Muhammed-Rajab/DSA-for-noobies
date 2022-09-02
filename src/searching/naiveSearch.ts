function naiveSearch(s: string, word: string) {
    if (s.length === 0 || word.length === 0) return -1;

    const matches = [];
    const firstChar = word[0];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === firstChar) {
            let isMatch = false;
            for (let j = 1; j < word.length; j++) {
                if (s[i + j] === word[j]) isMatch = true;
                else isMatch = false;
            }
            if (isMatch) matches.push([i, i + word.length - 1]);
        }
    }
    return matches;
}

console.log(naiveSearch("thisislove", "isis"));
console.log(naiveSearch("isisisis", "isis"));
console.log(naiveSearch("lorie loded", "lo"));
