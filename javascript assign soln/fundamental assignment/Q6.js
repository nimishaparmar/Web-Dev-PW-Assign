const curry = (fn) => {
    const curried = (...args) => {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return (...newArgs) => curried(...args, ...newArgs);
    };
    return curried;
};
const add = (a, b) => a + b;
const curriedAdd = curry(add);
console.log(curriedAdd(2)(3));
console.log(curriedAdd(10)(5));
console.log(curriedAdd(7)(8));
const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4));
console.log(curriedMultiply(1)(5)(6));
