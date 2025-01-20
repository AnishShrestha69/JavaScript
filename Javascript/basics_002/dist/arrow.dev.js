"use strict";

var _this = void 0;

var anyObj = {
  username: "Anish Shrestha",
  age: 19,
  welcomeMessage: function welcomeMessage() {
    console.log("".concat(this.username, ",  welcome to paradise")); // console.log(this);
  }
}; // anyObj.welcomeMessage();
// anyObj.username = "Suzata Shrestha";
// anyObj.welcomeMessage();
// console.log(this);
// function any() {
//   let username = "Anish Shrestha";
//   console.log(this.username);
// }
// any();

var any1 = function any1() {
  var username = "Anish Shrestha";
  console.log(_this.username);
};

any1();

var addTwo = function addTwo(a, b) {
  return a + b;
}; // explicit return


var addTwoNumber = function addTwoNumber(c, d) {
  return c + d;
}; // implicit return


console.log(addTwoNumber(12, 1212));
console.log(addTwo(10, 1221)); // syntax of arrow function
// () =>{
// }