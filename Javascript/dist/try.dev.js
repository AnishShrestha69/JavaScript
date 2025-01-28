"use strict";

var myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // const newNum = myNums.filter((num) => num > 5);

var newNum = myNums.filter(function (num) {
  return num > 4;
});
console.log(newNum);