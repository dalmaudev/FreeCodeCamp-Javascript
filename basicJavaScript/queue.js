// * Solution of Basic JavaScript: Stand in Line


// ! In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.


// ? Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// ? Add the number to the end of the array, then remove the first element of the array.

// ? The nextInLine function should then return the element that was removed.


function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    var rm = arr.shift(item);
    
    return rm;
    // Only change code above this line
    
  }



// & 49% Complete Hurra! :D