//Loops in javascript are used to execute a block of code repeatedly as long as a specified condition is true.
/*
1. for loop:
   - Use when you know how many times you want to repeat a task.
   - Syntax:
     for (initialization; condition; increment/decrement) {
         // code to be executed
     }
*/
     for (let i = 0; i < 5; i++) {
         console.log("Iteration1 " + (i + 1));
     }
     
/*
2. while loop:
   - Use when you want to repeat a task while a condition is true.
   - Syntax:
     while (condition) {
         // code to be executed
     }
*/     
     let j = 0;
     while (j < 5) {
         console.log("Iteration2 " + (j + 1));
         j++;
     }
     
/*
3. do-while loop:
   - Use when you want to execute a task at least once, then repeat it while a condition is true.
   - Syntax:
     do {
         // code to be executed
     } while (condition);
 */
    let k=0;
     do {
         console.log("Iteration3 " + (k + 1));
         k++;
     } while (k < 5);