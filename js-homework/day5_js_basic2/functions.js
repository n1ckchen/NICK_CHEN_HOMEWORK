export function sum(num1 = 0, num2 = 0) {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here
  // return () => {};
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Arguments must be number type");
  }

  return num1 + num2;
}

export function sumOfAll(...args) {
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here
  // return () => {};

  // Check if all arguments are numbers
  if (args.some((arg) => typeof arg !== "number")) {
    throw new Error("Arguments must be number type");
  }
  //accumulator
  return args.reduce((acc, val) => acc + val, 0);
}
