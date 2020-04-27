// * Solution of Basic JavaScript: Logical Order in If Else Statements


// ! Order is important in if, else if statements. The function is executed from top to bottom so you will want to be careful of what statement comes first.


/**
 * ? Write chained if/else if statements to  fulfill the following conditions:
 * ? num < 5 - return "Tiny"
 * ? num < 10 - return "Small"
 * ? num < 15 - return "Medium"
 * ? num < 20 - return "Large"
 * ? num >= 20 - return "Huge"
 * */


function testSize(num) {
    // Only change code below this line
  if (num < 5) {
      return "Tiny";
    } else if (num < 10) {
      return "Small";
    } else if (num < 15) {
      return "Medium";
    } else if(num < 20) {
      return "Large";
    } else {
    return "Huge";
  }
  
  }
    // Only change code above this line
  console.log(testSize(0));

// & 65% Complete Hurra! :D