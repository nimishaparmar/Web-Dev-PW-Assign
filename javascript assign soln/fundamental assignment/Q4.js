const calculateTax = (function() {
    const taxBrackets = [
        { threshold: 50000, rate: 0.1 },  
        { threshold: 100000, rate: 0.2 }, 
        { threshold: Infinity, rate: 0.3 }
    ];

    return function(income) {
        let tax = 0;
        let remainingIncome = income;

        for (let i = 0; i < taxBrackets.length; i++) {
            let { threshold, rate } = taxBrackets[i];
            let taxableIncome = Math.min(remainingIncome, threshold);

            tax += taxableIncome * rate;
            remainingIncome -= taxableIncome;

            if (remainingIncome <= 0) break;
        }

        return tax;
    };
})();
const incomes = [30000, 60000, 120000];
incomes.forEach(income => {
    const tax = calculateTax(income);
    console.log(`Income: $${income}, Tax: $${tax.toFixed(2)}`);
});
