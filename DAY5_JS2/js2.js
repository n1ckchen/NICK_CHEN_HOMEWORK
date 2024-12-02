// For loop
// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// forEach
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//     console.log(number);
// });

// for…of…
// const numbers = [1, 2, 3, 4, 5];
// for (const number of numbers) {
//     console.log(number);
// }

// Array.prototype.map
// const numbers = [1, 2, 3, 4, 5];

// // Using map to double each number in the array
// const doubledNumbers = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]



// const person = { firstName: 'Alice', lastName: 'Smith' };

// // Object destructuring with renaming
// const { firstName: first, lastName: last } = person;

// console.log(first); // Output: 'Alice'
// console.log(last); // Output: 'Smith'


// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;


// const [a, b, ...rest] = [1, 2, 3, 4, 5];
// console.log(rest); // Output: [3, 4, 5]

// Shallow spread operator
// const originalArray = [1, 2, 3];
// const shallowCopy = [...originalArray];

// Deep copy, clonedeep function
// const _ = require('lodash');
// const originalObject = { a: 1, b: { c: 2 } };
// const deepCopy = _.cloneDeep(originalObject);

// const deepClone = (obj) => {
//     if (typeof obj !== 'object' || obj === null) return obj;


//     const newObj = Array.isArray(obj) ? [] :{};
//     for( let key of obj) {
//         const value = obj[key];
//         newObj[key] = deepClone(value);


//     }
//     return newObj;
// }
// // Nullish Coalescing： ??
// // Styling Console Log： c%
// // Optional Chaining: ?.
// // Object Shorthand：if key = value
// // Defer/Async Loading: no need to wait for page rendering




// Ternary operator, shortcut for if{} and else {} statements
// Condition ? codeIfTrue : codeIfFalse;


// Logical operators: used to combine or manipulate boolean values
// &&,||,!
