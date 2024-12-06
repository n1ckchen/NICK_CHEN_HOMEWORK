// Event loop takes first thing in the (passed from web apis)task que and add it to the stack (even stack is empty)
// non-blocking operations refer to the ability to initiate an operation and then continue executing other code without waiting for that operation to complete.

// ​​A promise is an object that will return a value in future
// Promises in JavaScript are a powerful tool for handling asynchronous operations
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// JavaScript starts executing code in the global execution context and maintains a call stack for function calls.
// When an asynchronous operation is initiated (like a network request or timer), it is handed off to the Web API, and JavaScript continues executing subsequent code.
// Once the async operation completes, the callback associated with that operation is placed into the callback queue.
// The event loop constantly checks if the call stack is empty. If it is, it moves the first function from the callback queue to the call stack for execution.
// This cycle continues, allowing JavaScript to handle asynchronous operations without blocking the main thread.

// Role in the Event Loop: The event loop relies on the call stack to determine what piece of JavaScript code is currently running. If the stack is empty, it means there are no current tasks executing, and the event loop can proceed to the next step.


// Role in the Event Loop: When an asynchronous operation is initiated using Web APIs, they manage the operation and once complete, they will pass the callback function associated with that operation back to the callback queue. The JavaScript engine doesn’t wait for these operations to finish; it continues executing other code.


// Role in the Event Loop: The event loop monitors both the call stack and the callback queue. If the call stack is empty (meaning there are no executing tasks), it takes the first callback from the callback queue and pushes it onto the call stack for execution.


// randomPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// const delays = [800, 1200, 1000];

// const fetchSimulator = (url, delay) => {
//     return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), delay));
// };
