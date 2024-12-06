// Nestetd function
// A function inside another function

// Function scope
// -An variable defined inside a function cannot be accessed anywhere outside the function
// -The function can access all the variable in the scope where it’s defined

// Closure
// Nested function + function scope+ persist the outer function values within inner function and compute it later
// Variables and environment that you can execute freely.

// Callback
// Function foo(bar) {
// 	bar();
// }
// A function that is passed as a parameter of another function, is a callback function
// foo( function () {console.log(“Hello”);
// } );

// Higher order function
// 1. Returns another function,
// 2. Takes one or more functions as arguments (often called callback functions).

// It’s not mandatory for callback functions to return anything,execute actions, but hof will return a function

// Recursion - a function execute itself till hit base condition, return exit the function.
// Function foo () {
// 	if(base) {return};
// 	Else foo();
// }

// A higher order function is any function that does at least one of the following:
// Takes one or more functions as arguments.
// Returns a function as its result.

// Currying takes a function that receives more than one parameter and breaks it into a series of unary( one parameter ) functions. A currying function only takes one parameter at a time.

// Callback Function
// A callback function is a function that is passed as an argument to another function (usually an HOF). The function receiving the callback can then execute it at an appropriate time (e.g., after a computation, when a certain condition is met, etc.).
// Key Points
// HOFs may use callbacks, but they can also return functions directly without necessarily using a callback pattern.
// A callback is specifically a function that you pass to another function, which may be called (invoked) within that other function.
// HOFs can exist independently of callbacks by manipulating functions and returning them without necessarily executing them in a callback-like manner.

// Debounce is useful for scenarios where you want to delay the execution of a function until after a period of inactivity, such as input fields (search boxes).
// Throttle is beneficial when you want to ensure that a function doesn’t execute more than once every specified time period, such as handling resize or scroll events.

// Arrow functions
// Single parameter(no parentheses required)
// const square = x => x * x;

// Multiple parameters(parentheses required)
// const add = (a, b) => a + b;

// No parameter(empty parentheses)
// const greeting = () => ‘Hello World!”;

// Body block (uses curly brace) {return}
// Const checkEvenOdd = (num) => {
// 	Return num === 0 ? “Even” : “Old”;
// };

// Basic Closure Example:

// function makeCounter() {
//     let count = 0; // Private variable

//     return function() {
//         count++; // Accessing the outer variable
//         return count;
//     };
// }

// const counter = makeCounter();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
// console.log(counter()); // Output: 3
// 防抖
// Debouncing helps to limit the rate at which a function gets executed by waiting for a pause in the events.
// It's particularly useful for optimizing performance in scenarios where events are fired frequently.
// The debounced function retains the context and arguments from the original call, allowing it to be invoked correctly after the wait period.

// 2. Debounce Example:

// Debouncing is a technique that limits the rate at which a function can fire. It ensures that the function is called after a certain period of inactivity.

// function debounce(func, delay) {
//     let timeout;
//     return function(...args) {
//         const context = this;
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(context, args), delay);
//     };
// }

// const log = () => console.log('Action performed!');
// const debouncedLog = debounce(log, 2000);

// // Only the last call will execute after 2 seconds of inactivity.
// debouncedLog();
// debouncedLog();
// debouncedLog(); // After 2 seconds, "Action performed!" will be logged.
// ```
// 节流
// 3. Throttle Example:

// Throttling is a technique that limits the number of times a function can be called within a specific time frame.  Throttling limits the number of times a function can be executed in a given time frame.

// function throttle(func, limit) {
//     let lastFunc;
//     let lastRan;

//     return function() {
//         const context = this;
//         const args = arguments;

//         if (!lastRan) {
//             func.apply(context, args);
//             lastRan = Date.now();
//         } else {
//             clearTimeout(lastFunc);
//             lastFunc = setTimeout(() => {
//                 if ((Date.now() - lastRan) >= limit) {
//                     func.apply(context, args);
//                     lastRan = Date.now();
//                 }
//             }, limit - (Date.now() - lastRan));
//         }
//     };
// }

// const logResize = () => console.log('Window resized!');
// const throttledResize = throttle(logResize, 2000);

// // If the window gets resized frequently, it will log "Window resized!" at most every 2 seconds.
// window.addEventListener('resize', throttledResize);

// function multiply(a) {
//     return function(b) {
//         return function(c) {
//             return a * b * c;
//         };
//     };
// }

// const multiplyByTwo = multiply(2); // First function call with 2
// const multiplyByTwoAndThree = multiplyByTwo(3); // Second function call with 3
// console.log(multiplyByTwoAndThree(4)); // Output: 24 (2 * 3 * 4)

// (function() {
//     const privateVariable = "I am private!";

//     function privateFunction() {
//         console.log(privateVariable);
//     }

//     privateFunction(); // Output: I am private!
// })();
// Trying to access privateVariable or privateFunction will result in an error
// console.log(privateVariable); // ReferenceError: privateVariable is not defined

// const result = (function(x, y) {
//     return x + y;
// })(10, 5);

// console.log(result); // Output: 15

// In JavaScript, functions are first-class citizens, meaning they can be treated like any other variable. You can assign them to variables, pass them as arguments, and return them from other functions.

//  Examples of Higher Order Functions:

// 1. Returning a Function:

//    const greet = (greeting) => {
//        return (name) => {
//            return `${greeting}, ${name}!`;
//        };
//    };

//    const sayHello = greet("Hello");
//    console.log(sayHello("Alice")); // Output: Hello, Alice!

// 2. Taking a Callback Function as Argument:

//     - Array Methods: Common higher order functions in JavaScript include array methods like `forEach`, `map`, and `filter`.

//     Example with `forEach`:

//    const numbers = [1, 2, 3, 4];
//    numbers.forEach((number) => {
//        console.log(number * 2); // Output: 2, 4, 6, 8
//    });

// Example with `map`:

//    const doubled = numbers.map((number) => number * 2);
//    console.log(doubled); // Output: [2, 4, 6, 8]
// ```

// Example with `filter`:

//    const evens = numbers.filter((number) => number % 2 === 0);
//    console.log(evens); // Output: [2, 4]
// ```

// 3. Debounce: Debouncing is a higher-order function that limits the rate at which a function can fire. It’s often used in scenarios like handling window resizing or scrolling.

// Debounce 防抖
//    const debounce = (func, delay) => {
//        let timeoutId;
//        return function(...args) {
//            if (timeoutId) {
//                clearTimeout(timeoutId);
//            }
//            timeoutId = setTimeout(() => {
//                func.apply(this, args);
//            }, delay);
//        };
//    };

//    const log = () => console.log("Resized!");
//    const debouncedLog = debounce(log, 1000);

//    window.addEventListener("resize", debouncedLog);

// 节流
// 4. Throttle: Throttling ensures that a function is called at most once in a specified time period.

//    const throttle = (func, limit) => {
//        let lastFunc;
//        let lastRan;
//        return function(...args) {
//            if (!lastRan) {
//                func.apply(this, args);
//                lastRan = Date.now();
//            } else {
//                clearTimeout(lastFunc);
//                lastFunc = setTimeout(() => {
//                    if ((Date.now() - lastRan) >= limit) {
//                        func.apply(this, args);
//                        lastRan = Date.now();
//                    }
//                }, limit - (Date.now() - lastRan));
//            }
//        };
//    };

//    const logScroll = () => console.log("Scrolling...");
//    const throttledScroll = throttle(logScroll, 1000);

//    window.addEventListener("scroll", throttledScroll);

// A pure function is a concept from functional programming that follows two main principles:
// Deterministic: Given the same input, a pure function always produces the same output. It does not rely on any external state or mutable data. This means it behaves predictably.
// No Side Effects: A pure function does not cause any side effects. This means it does not modify any external state or variables, nor does it perform any observable actions like logging to the console, modifying a global variable, changing the contents of a data structure, or performing I/O operations (e.g., reading from a file or making a network request).

// Example of a Pure Function
// // Pure function example
// function add(a, b) {
//     return a + b; // Always returns the same result for the same inputs
// }

// console.log(add(2, 3)); // Output: 5
// console.log(add(2, 3)); // Output: 5 (same output for same input)

// Example of an Impure Function
// let externalCounter = 0;

// // Impure function example
// function incrementCounter() {
//     externalCounter += 1; // Modifies external state (side effect)
//     return externalCounter;
// }

// console.log(incrementCounter()); // Output: 1
// console.log(incrementCounter()); // Output: 2

const stock = () => {
  let privateStock = 0;
  // console.log("first");
  return {
    buyStock(amount = 1) {
      if (amount <= 0) {
        throw new Error(`It's not a valid operation!`);
      }
      privateStock += amount;
      console.log(`You've bough ${privateStock} stocks!`);
      return privateStock;
    },
    sellStock(soldAmount = 1) {
      if (soldAmount <= 0) {
        privateStock = 0;
        console.log("OOPS! You've Lost all your stocks!")
        return privateStock;
      }
      if (soldAmount > privateStock) {
        throw new Error(
          `Not enough stocks! You only have ${privateStock} stocks.`
        );
      }
      privateStock -= soldAmount;
      console.log(`You've sold ${soldAmount} stocks and ${privateStock} left!`);
      return privateStock;
    },
  };
};

const stock1 = stock();
stock1.buyStock(10);
stock1.sellStock(-100);



