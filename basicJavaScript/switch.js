// * Solution of Basic JavaScript: Selecting from Many Options with Switch Statements


// ! If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

/** 
 *  ? Write a switch statement which tests val and sets answer for the following conditions:
 *   ? 1 - "alpha"
 *   ? 2 - "beta"
 *   ? 3 - "gamma"
 *   ? 4 - "delta" 
 */

function caseInSwitch(val) {

    var answer = "";
    
    // Only change code below this line
  switch(val){
    case 1:
      var answer = "alpha";
      break;
    case 2:
      var answer = "beta";
      break;
    case 3:
      var answer = "gamma";
      break;
    case 4:
      var answer = "delta";
      break;      
  }
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);

// & 66% Complete Hurra! :D