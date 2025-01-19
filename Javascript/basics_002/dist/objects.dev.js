"use strict";

var _user;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mySym = Symbol("key1");
var user = (_user = {
  name: "Anish",
  age: 19,
  location: "Kathmandu",
  "full name": "Anish Shrestha"
}, _defineProperty(_user, mySym, "thisissymbol"), _defineProperty(_user, "blabla", "bababa"), _defineProperty(_user, "blkablka", "nananan"), _user); // console.log(user["full name"]);
// console.log(typeof user[mySym]);
// user.age = 23;
// console.log(user);
// Object.freeze(user); // yo vanda tala kunai value add gareko xa vani teslai add huna didaina
// user.name = "Manish shrestha";
// user.blabla = "suzata";

user.greeting = function () {
  console.log("Hello, ".concat(this.name, ". You are ").concat(this.age, " years old"));
}; // console.log(user.greeting());


var tinderuser = new Object();
tinderuser.name = "Anish Shrestha";
tinderuser.age = 23;
tinderuser.status = "Unmarried"; // console.log(tinderuser);

var regularUser = {
  email: "user@gmail.com",
  userDetails: {
    fullname: {
      f_name: "Anish",
      middle_name: "man",
      l_name: "shrestha"
    }
  }
}; // console.log(regularUser.userDetails.fullname.f_name);

var newObj = {
  a: 1,
  b: 2
};
var newObj1 = {
  c: 3,
  d: 4
};
var newObj2 = {
  e: 5,
  f: 6
};
var newObj3 = Object.assign({}, newObj, newObj1, newObj2); // console.log(newObj3);

var arr = [{
  name: "Anish",
  age: 21
}, {
  name: "suzata",
  age: 18
}, {
  name: "srijana",
  age: 19
}]; // console.log(arr[1].name);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// object de structure

var courseDetails = {
  courseName: "JavaScript",
  coursePrice: "1000000",
  courseInstructor: "Anup"
};
var courseInstructor = courseDetails.courseInstructor;
console.log(courseInstructor);
courseDetails.courseInstructor = "anish";
var instructor = courseDetails.courseInstructor;
console.log(instructor);