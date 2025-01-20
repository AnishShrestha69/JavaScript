"use strict";

function loginDetails(username) {
  if (!username) {
    // !username checks if the value is truthy of falsy
    console.log("Please enter your name");
  } else {
    return "".concat(username, " just logged in");
  }
} // console.log(loginDetails("anish"));
// ########################### NEW FUNCTION EXAMPLE #########################


function addTwoNumber(a, b) {
  return a + b;
}

var result = addTwoNumber(10, 20); // console.log("result: ", result);

function calculateCartNumber() {
  for (var _len = arguments.length, value1 = new Array(_len), _key = 0; _key < _len; _key++) {
    value1[_key] = arguments[_key];
  }

  return value1;
} // console.log(calculateCartNumber(10, 12, 12, 121, 21));


function randomNumber(val1, val2) {
  for (var _len2 = arguments.length, val3 = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    val3[_key2 - 2] = arguments[_key2];
  }

  return val3;
} // console.log(randomNumber(12, 21, 31, 11));


var mobileDetails = {
  mobileName: "samsung",
  price: 1999
};

function handleObj(anyObj) {
  console.log("The mobile I am buying is ".concat(anyObj.mobileName, " and the price of it is ").concat(anyObj.price));
} // handleObj(mobileDetails);


handleObj({
  mobileName: "Realme 9 Pro",
  price: 300
});
var newArr = [100, 200, 300, 400]; // new array created

function returnArrValue(myArr) {
  //
  return myArr[1];
} // console.log(returnArrValue(newArr));


console.log(returnArrValue([100, 2000, 30000]));