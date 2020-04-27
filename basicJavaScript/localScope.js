// * Solution of Basic JavaScript: Local Scope and Functions


// ! Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.



// ? Declare a local variable myVar inside myLocalScope. Run the tests and then follow the instructions commented out in the editor.


function myLocalScope() {
    'use strict';
  
    var myVar = "foo";
    console.log(myVar);
  }

myLocalScope();

console.log(myVar);



// & 45% Complete Hurra! :D