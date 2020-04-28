// * Solution of Basic JavaScript: Multiple Identical Options in Switch Statements


// ! If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered.

function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
        case 1:
        case 2:
        case 3:
            var answer = "Low"; 
            break;
        case 4:
        case 5:
        case 6:
            var answer = "Mid"; 
            break;
        case 7:
        case 8:
        case 9:
            var answer = "High";  
            break;  
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);

// & 68% Complete Hurra! :D