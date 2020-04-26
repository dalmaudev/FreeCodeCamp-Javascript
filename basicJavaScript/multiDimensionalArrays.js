// * Solution of Basic JavaScript: Access Multi-Dimensional Arrays With Indexes

// ! One way to think of a multi-dimensional array, is as an array of arrays. 

/** 
 * ! Example:
 * ! var arr = [
 * ! [1,2,3],
 * ! [4,5,6],
 * ! [7,8,9],
 * ! [[10,11,12], 13, 14]
 * ! ];
 */
// ! arr[3]; // equals [[10,11,12], 13, 14]
// ! arr[3][0]; // equals [10,11,12]
// ! arr[3][0][1]; // equals 11


// ? Using bracket notation select an element from myArray such that myData is equal to 8.


var myArray = [[1,2,3], 
               [4,5,6], 
               [7,8,9], 
               [[10,11,12], 13, 14]];

var myData = myArray[2][1];


// & 36% Complete Hurra! :D