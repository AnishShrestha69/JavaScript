"use strict";

// for (const element of object) {
// } ----> syntax
// for Of loop
myArr = ["anish", "manish", "unish", "sanish"];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = myArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {//   console.log(name);

    var name = _step.value;
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var greeting = "hello world";
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = greeting[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var greet = _step2.value;
  } // console.log(greet);
  //MAPS
  // const map = new Map();
  // map.set("NP", "Nepal");
  // map.set("Aus", "Australia");
  // console.log(map);
  // for (const [key, value] of map) {
  // console.log(key + ` :- ` + value);
  // }
  // for in
  // for (const key in object) {
  //   }
  // } -----> syntax

} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var myObj = {
  Js: "javaScript",
  cpp: "c++",
  rb: "ruby"
};

for (var key in myObj) {// console.log(`${key} is shortcut for ${myObj[key]}`);
}

myArr = ["apple", "ball", "cat"];

for (var _key in myArr) {} // console.log(myArr[key]);
// const map = new Map();
// map.set("NP", "Nepal");
// map.set("Aus", "Australia");
// for (const [key, value] in map) {
//   console.log(key, value);
// }
// ------------> this will not execute because for in is not suitable for map<--------------
//


familyMember = ["anish", "animesh", "ramKrishna", "anita"]; // familyMember.forEach((element) => {
//   // console.log(element);
// });
// function jpt(element) {
//   console.log(element);
// }
// familyMember.forEach(jpt);

familyMember.forEach(function (item, index, arr) {
  console.log(item, index, arr);
});
var myCodding = [{
  languageName: "javascript",
  languageFile: "Js"
}, {
  languageName: "java",
  languageFile: "java"
}, {
  languageName: "python",
  languageFile: "py"
}];
myCodding.forEach(function (items) {
  console.log(items.languageFile);
});