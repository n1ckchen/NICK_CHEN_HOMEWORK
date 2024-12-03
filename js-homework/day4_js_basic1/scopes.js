// Global scope

var globalVar = "I am global";

function accessGlobal() {
  return globalVar;
}

// console.log(accessGlobal()); // Expected output?
// console.log(globalVar);      // Expected output?
// 'I am global';

// Local scope
function localScope() {
  var localVar = "I am local to this function";
}

// localScope();
// console.log(localVar); // What happens here and why?
// error, because localVar is not accessible outside of the function

    
// Block scope
if (true) {
  let blockVar = "I exist inside this block only";
  const blockConst = "So do I!";
}

// console.log(blockVar); // What is the result and why?
// console.log(blockConst); // What is the result and why?
// error, because localVar is not accessible outside of the if() statement block


// Function scope vs block scope
function loopScope() {
  for (var i = 0; i < 3; i++) {
    // console.log(i); // Outputs during loop?
    // 0,1,2
  }
  //   console.log("After loop with var: " + i); // What happens here?
  // 3, var is 3 after loop, and accessible outside the loop due to function scope

  for (let j = 0; j < 3; j++) {
    console.log(j); // Outputs during loop?
    // 0,1,2
  }
  //   console.log("After loop with let: " + j); // What happens here?
  // error because let is not accessible outside the loop
}

loopScope();
