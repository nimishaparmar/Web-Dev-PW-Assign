/*Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
The inner function should access both the parameter of outerFunction and a variable declared within
outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
variables even after outerFunction has finished executing.*/

const outerFunction = (outerParam) => {
    const outerVariable = 'I am from outerFunction';
    const innerFunction = () => {
        console.log(`Inner function accessed: outerParam = ${outerParam}, outerVariable = ${outerVariable}`);
    };
    return innerFunction;
};
const innerFunc = outerFunction('Hello');
innerFunc();
