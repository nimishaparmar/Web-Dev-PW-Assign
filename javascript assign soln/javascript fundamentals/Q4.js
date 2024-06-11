/*Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
from a given string.*/

const extractDateParts = (pattern, inputString) => {
    const regex = new RegExp(pattern);
    const match = inputString.match(regex);

    if (match) {
        const day = match.groups.day;
        const month = match.groups.month;
        const year = match.groups.year;

        console.log(`Match found!`);
        console.log(`Day: ${day}`);
        console.log(`Month: ${month}`);
        console.log(`Year: ${year}`);
    } else {
        console.log(`No match found.`);
    }
};
const pattern = /(?<day>\d{2})-(?<month>\d{2})-(?<year>\d{4})/;
const testStrings = [
    "Today's date is 29-05-2024.",
    "The event is scheduled for 15-08-2023.",
    "No date here."
];

testStrings.forEach(testString => {
    console.log(`Testing string: "${testString}"`);
    extractDateParts(pattern, testString);
    console.log('-------------------------');
});
