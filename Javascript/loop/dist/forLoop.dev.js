"use strict";

for (i = 0; i <= 10; i++) {
  if (i == 5) {} // console.log("5 is best number");
  //   console.log(i);

}

for (var _i = 0; _i <= 10; _i++) {
  //   console.log(`outer loop ${i}`);
  for (var j = 0; j <= 10; j++) {// console.log(`outer loop ${i} & inner loop ${j}`);
  }
}

array = ["apple", "banana", "mango", "orange"];

for (var index = 0; index < array.length; index++) {
  var element = array[index]; //   console.log(element);
}

for (i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log("5 is detected");
    break;
  }

  console.log("value of i is ".concat(i));
}