/*Conditional statements in JavaScript allow you to run different code based on certain conditions. 
  There are mainly two types of conditional statement : if statements and switch statements.*/

/*
1. if statements:
   - An if statement evaluates a condition and executes a block of code if the condition is true.
   - It can be followed by an optional else statement, which executes a block of code if the condition is false.
 */
     let x = 10;
     if (x > 0) {
         console.log("x is positive");
     } else {
         console.log("x is non-positive");
     }

/* 
2. switch statements:
   - switch checks a value against different cases and executes code based on which case matches.
*/
     let day = "Monday";
     switch (day) {
         case "Monday":
             console.log("It's Monday!");
             break;
         case "Tuesday":
             console.log("It's Tuesday!");
             break;
         default:
             console.log("It's another day of the week.");
     }