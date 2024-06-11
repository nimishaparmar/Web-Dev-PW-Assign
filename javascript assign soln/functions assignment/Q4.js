/*Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
function with various incomes. */

function calculateTax(income) {
    const brackets = [
        { min: 0, max: 10000, rate: 0.1 },
        { min: 10000, max: 50000, rate: 0.2 },
        { min: 50000, max: Infinity, rate: 0.3 }
    ];
    function getTaxRate(income) {
        for (let bracket of brackets) {
            if (income >= bracket.min && income <= bracket.max) {
                return bracket.rate;
            }
        }
    }
    const taxRate = getTaxRate(income);
    const taxAmount = income * taxRate;

    return taxAmount;
}

const income1 = 5000;
const tax1 = calculateTax(income1);
console.log(`For an income of ${income1}, the tax to be paid is $${tax1}`);

const income2 = 25000;
const tax2 = calculateTax(income2);
console.log(`For an income of ${income2}, the tax to be paid is $${tax2}`);

const income3 = 75000;
const tax3 = calculateTax(income3);
console.log(`For an income of ${income3}, the tax to be paid is $${tax3}`);
