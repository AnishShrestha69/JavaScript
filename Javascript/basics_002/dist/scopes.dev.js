"use strict";

if (true) {
  var a = 10;
  var b = 20;
  var c = 30;
} // console.log(a);
// console.log(b);
// console.log(c);


function one() {
  var username = "Anish Shrestha";

  function two() {
    var website = "YouTube";
    console.log(username);
  } //   two();
  //   console.log(website);

} // one();


function addOne(num) {
  return num + 1;
}

console.log(addOne(50));

var addTwo = function addTwo(num) {
  return num + 2;
};

addTwo(22);