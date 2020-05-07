// * Solution of Basic JavaScript: Replace Loops using Recursion


// ! Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Check FCC example and all explication

// ? Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.


function sum(arr, n) {
    // Only change code below this line
  if (n <= 0) {
  return 0;
  } else {
    return sum(arr, n - 1) + arr[n  - 1];
  }
    // Only change code above this line
  }




// & 91% Complete Hurra! :D