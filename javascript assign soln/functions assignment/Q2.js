/*Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a
personalized greeting message. Use this function to greet three different people.*/

function generateGreeting(name) {
    return `Hello, ${name}! Welcome to our website.`;
}
const greeting1 = generateGreeting('Alice');
const greeting2 = generateGreeting('Bob');
const greeting3 = generateGreeting('Charlie');

console.log(greeting1);
console.log(greeting2);
console.log(greeting3);
