// * Solution of Basic JavaScript: Adding a Default Option in Switch Statements


// ! In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            var answer = "apple";
            break;
        case "b":
            var answer = "bird";
            break;
        case "c":
            var answer = "cat";
            break;
        default:
            var answer = "stuff";
            break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);

// & 67% Complete Hurra! :D