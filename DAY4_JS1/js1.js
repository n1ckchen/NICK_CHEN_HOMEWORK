// // Example 1
// console.log(1 == '1'); // true, type coercion: string '1' converted to number 1
// // Example 2
// console.log(null == undefined); // true, both are considered equal in loose comparison
// // Example 3
// console.log(0 == false); // true, type coercion: false is converted to 0
//  1 + “1” = “11”


// Var - ES5, function scoped, can be re-declared and updated, hoist to the top
// Let - ES6, block scoped,cannot be re-declared but can be updated, does not hoist to the top
// Const - ES6, block scoped, cannot be re-declared and updated, does not hot hoist to the top

// console.log(a)
// Var a = 4
// Undefined instead of error


// Hoisting: move codes/declarations to the top of the file automatically 
// Normal functions, but not functions with let/const keyword

// Data types:
// Primitives/single,basic/no method,properties: Number ,String, Boolean, BigInt, Symbol, Undefined, Null
// Non-Primitives: Object(arrays,functions and objects)

// Pass by reference vs pass by value
// value:
// Let a = 5, let b = “hello”, c = a , d=c, c = c + 1.  
// A = 5, c = 5, d= 5, c = 6
// reference:
// Let c = [3,4], let d = c
// d.push(5), c = [3,4,5]


// Let c = [1,2], let b = [1,2], c == d, c === d are both false because they have different memory references

// Common control flow of code execution
// If-Else Statements:
// if statement: Executes a block of code if a specified condition is true.
// else if statement: Allows you to check multiple conditions.
// else statement: Runs a block of code if the preceding conditions are false.
// for loop: Executes a block of code a specified number of times.
// while loop: Repeats a block of code as long as a specified condition is true.
// switch statement: Evaluates an expression and executes different code blocks based on matching cases.

// continue: Skips the current iteration of a loop and continues with the next iteration.
// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//         continue; // Skip printing 2
//     }
//     console.log(i);
// }

// // break: Terminates the loop or switch statement and transfers control to the statement immediately following the loop or switch.
// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         break; // Exit loop when i is 3
//     }
//     console.log(i);
// }

function bubbleSortArr1(arr) {
    const newArr = arr.slice();
    const n = newArr.length;
    let swapped;
    
    console.log("Initial Array: " + newArr);

    for (let i = 0; i < n; i++) {
        swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            console.log(`i: ${i}, j: ${j}`);
            console.log(`Comparing elements at indices ${j} and ${j + 1}: ${newArr[j]} > ${newArr[j + 1]}`);
            
            if (newArr[j] > newArr[j + 1]) {
                [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
                swapped = true;
                console.log(`Swapping elements: ${newArr[j]} and ${newArr[j + 1]}`);
            }

            console.log(`Array after ${i} passes and ${j} comparisons: ${newArr}`);
        }

        if (!swapped) {
            console.log("No swaps were made in this pass. Array is already sorted.");
            break;
        }
    }

    return newArr;
}

bubbleSortArr1([3,5,543,1]);

