"use strict";

// Array.reduce(
//   (accumulator, currentvalue) => accumulator + currentvalue,
//   initiator
// );
// Array.reduce(
//   (accumulator, currentvalue) => {
// return accumulator + currentvalue},
//   initiator
// );
// ----> syntax for reduce
var num1 = [1, 2, 3, 4, 5]; // const myTotal = num1.reduce((acc, curVal) => {
//   return acc + curVal;
// }, 0);
// console.log(myTotal);

var myTotal = num1.reduce(function (acc, curVal) {
  return acc + curVal;
}, 0); // console.log(myTotal);