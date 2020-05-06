// * Solution of Basic JavaScript: Nesting For Loops


// ! If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Check FCC example.


// ? Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr


function multiplyAll(arr) {
    var product = 1;

    // Only change code below this line

    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
        var product = product * arr[i][j];
        }
      }
    // Only change code above this line

    return product;
  }

multiplyAll([[1,2],[3,4],[5,6,7]]);
  
  



// & 89% Complete Hurra! :D