const examples = [
    {
        string: "aabc", 
        expected: {
            originalString: "aabc",
            finalString:  "a",
            finalStringLength: 1
        }
    },
    {
        string: "abc", 
        expected: {
            originalString: "abc",
            finalString:  "cc",
            finalStringLength: 2
        }
    },
    {
        string: "cabbac", 
        expected: {
            originalString: "cabbac",
            finalString:  "cc",
            finalStringLength: 2
        }
    }    
];
const exemplesFragmented = [
    {string: "aabc", expected: "acc"},
    {string: "acc", expected: "bc"},
    {string: "bc", expected: "a"},
    {string: "abc", expected: "cc"},
    {string: "cabbac", expected: "bbbac"},
    {string: "bbbac", expected: "bbcc"},
    {string: "bbcc", expected: "bac"},
    {string: "bac", expected: "cc"}
];

module.exports = {
    examples,
    exemplesFragmented
}