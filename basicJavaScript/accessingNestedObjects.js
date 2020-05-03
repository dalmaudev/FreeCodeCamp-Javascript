// * Solution of Basic JavaScript: Accessing Nested Objects


// ! The sub-properties of objects can be accessed by chaining together the dot or bracket notation. See the FCC example.

// ? Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.


// Setup
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line




// & 82% Complete Hurra! :D