/*Write a JavaScript program that demonstrates the use of character classes in regular expressions.
Create a function that searches for specific character classes in a given string and returns the matches. Test
the function with patterns for digits, uppercase letters, lowercase letters, and special characters.*/

const searchCharacterClasses = (pattern, inputString) => {
    const regex = new RegExp(pattern, 'g');
    const matches = inputString.match(regex);
    return matches ? matches : [];
};

const testString = "Hello World! 1234 @#";

const patterns = {
    digits: '\\d',            
    uppercase: '[A-Z]',         
    lowercase: '[a-z]',         
    specialCharacters: '[^a-zA-Z0-9\\s]'
};
Object.keys(patterns).forEach(key => {
    const pattern = patterns[key];
    const matches = searchCharacterClasses(pattern, testString);
    console.log(`Matches for ${key}:`, matches);
});
