// // Object with user information
// const user = {
//     name: 'Alice',
//     age: 30,
//     gender: 'female'
// };

// // Destructuring the 'user' object
// const { name, age } = user;

// // Displaying the extracted values
// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);

// Array containing different values
const colors = ["red", "green", "blue", "yellow"];

// Destructuring the 'colors' array
const [firstColor, secondColor, , fourthColor] = colors;

// Displaying the extracted values

// console.log(`First Color: ${firstColor}`);
// console.log(`Second Color: ${secondColor}`);
// console.log(`Fourth Color: ${fourthColor}`);
console.log(firstColor);
console.log(secondColor);

const userProfile = ({ firstName, lastName }) => {};

const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  const newObj = Array.isArray(obj) ? [] : {};
  for (let key of obj) {
    const value = obj[key];
    newObj[key] = deepClone(value);
  }
  return newObj;
};
// Nullish Coalescing： ??
// Styling Console Log： c%
// Optional Chaining: ?.
// Object Shorthand：if key = value
// Defer/Async Loading: no need to wait for page rendering

// return will exit the function out
