/*Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
the function with various patterns and strings.*/

const isMatch = (pattern, inputString, flags = '') =>
    new RegExp(pattern, flags).test(inputString);
const testCases = [
    { pattern: '^Hello', input: 'Hello World', expected: true },
    { pattern: 'world$', input: 'Hello world', expected: true },
    { pattern: '\\d+', input: 'There are 123 apples', expected: true },
    { pattern: '[A-Z]', input: 'abc def', expected: false },
    { pattern: 'apple', input: 'I have an apple', expected: true },
    { pattern: 'orange', input: 'I have an apple', expected: false },
    { pattern: '^\\d{3}-\\d{2}-\\d{4}$', input: '123-45-6789', expected: true },
    { pattern: 'hello', input: 'Hello', expected: false },
    { pattern: 'hello', input: 'Hello', expected: true, flags: 'i' }
];
testCases.forEach(({ pattern, input, expected, flags = '' }) => {
    const result = isMatch(pattern, input, flags);
    console.log(`Pattern: ${pattern}, Input: "${input}", Expected: ${expected}, Result: ${result}`);
});
