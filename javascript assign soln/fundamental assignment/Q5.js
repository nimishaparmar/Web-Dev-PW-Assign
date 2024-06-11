const factorial = (n) => {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};
const testValues = [0, 1, 5, 7];
testValues.forEach(value => {
    try {
        const result = factorial(value);
        console.log(`Factorial of ${value} is ${result}`);
    } catch (error) {
        console.error(error.message);
    }
});
