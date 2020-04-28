// * Solution of Basic JavaScript: Replacing If Else Chains with Switch


// ! If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements


// ? Change the chained if/else if statements into a switch statement.


function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
      case "bob":
        answer = "Marley";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 7:
        answer = "Ate Nine";
        break;  
      case 42:
        answer = "The Answer";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
    }
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);








// & 23% Complete Hurra! :D
