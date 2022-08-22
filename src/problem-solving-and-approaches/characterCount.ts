const countCharacters = (s: string) => {
    /* 
        Objective: Returns the count of character in a string

        Pseudo Code:
            fn countCharacters (s):
                if type(s) is not string or len(s) is 0:
                    return {}
                obj = {}
                
                for ch in s:
                    if ch is alphanumeric:
                        if obj[ch] == undefined:
                            obj[ch] = 1
                        else:
                            obj[ch] += 1
                return obj
    */

    // Handling edge cases and invalid inputs
    if (typeof s !== "string" || s.length === 0) return {};

    // Counting the characters and returning an object
    const obj: { [key: string]: number } = {};
    [...s.toLowerCase()].forEach((char: string) => {
        // Only include the character in the obj if it's alphanumeric
        const ccode = char.charCodeAt(0);
        if ((ccode >= 97 && ccode <= 122) || (ccode >= 48 && ccode <= 57)) {
            obj[char] = obj[char] === undefined ? 1 : obj[char] + 1;
        }
    });

    return obj;
};

console.log(countCharacters("Rajab")); // {"R": 1, "a": 2, "j": 1, "b": 1}
console.log(countCharacters("")); // {}
console.log(countCharacters("Hello hello$$$$123")); // {"H": 1, "h": 1, "e": 2, "l": 4, "o": 2, " ": 1}
