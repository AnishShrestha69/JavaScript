// for (const element of object) {

// } ----> syntax

// for Of loop
myArr = ["anish", "manish", "unish", "sanish"];
for (const name of myArr) {
  //   console.log(name);
}

const greeting = "hello world";
for (const greet of greeting) {
  // console.log(greet);
}

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

const myObj = {
  Js: "javaScript",
  cpp: "c++",
  rb: "ruby",
};
for (const key in myObj) {
  // console.log(`${key} is shortcut for ${myObj[key]}`);
}

myArr = ["apple", "ball", "cat"];
for (const key in myArr) {
  // console.log(myArr[key]);
}

// const map = new Map();
// map.set("NP", "Nepal");
// map.set("Aus", "Australia");
// for (const [key, value] in map) {
//   console.log(key, value);
// }
// ------------> this will not execute because for in is not suitable for map<--------------

//

familyMember = ["anish", "animesh", "ramKrishna", "anita"];
// familyMember.forEach((element) => {
//   // console.log(element);
// });

// function jpt(element) {
//   console.log(element);
// }
// familyMember.forEach(jpt);

familyMember.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCodding = [
  {
    languageName: "javascript",
    languageFile: "Js",
  },
  {
    languageName: "java",
    languageFile: "java",
  },
  {
    languageName: "python",
    languageFile: "py",
  },
];

myCodding.forEach((items) => {
  console.log(items.languageFile);
});
