/* Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this
within these methods such that method chaining of add, subtract, multiply and divide is possible.*/

const Calculator = {
    value: 0,
    add: function(num) {
        this.value += num;
        return this;
    },
    subtract: function(num) {
        this.value -= num;
        return this;
    },
    multiply: function(num) {
        this.value *= num;
        return this;
    },
    divide: function(num) {
        if (num !== 0) {
            this.value /= num;
        } else {
            console.error('Division by zero is not allowed');
        }
        return this;
    },
    reset: function() {
        this.value = 0;
        return this;
    },
    getResult: function() {
        return this.value;
    }
};
Calculator.add(10)
          .subtract(2)
          .multiply(3)
          .divide(4);
console.log(Calculator.getResult()); 
Calculator.reset()
          .add(5)
          .multiply(2);
console.log(Calculator.getResult());
