// * Solution of Basic JavaScript: Comparison with the Strict Inequality Operator


// ! The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.

// ? Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17


// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);



// & 55% Complete Hurra! :D