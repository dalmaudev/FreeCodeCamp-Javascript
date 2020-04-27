// * Solution of Basic JavaScript: Comparison with the Strict Equality Operator


// ! Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

// ? Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7


// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);



// & 53% Complete Hurra! :D