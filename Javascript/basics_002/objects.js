const mySym = Symbol("key1");
const user = {
  name: "Anish",
  age: 19,
  location: "Kathmandu",
  "full name": "Anish Shrestha",
  [mySym]: "thisissymbol", // this is how symbol is defined in objects
  blabla: "bababa",
  blkablka: "nananan",
};

// console.log(user["full name"]);
// console.log(typeof user[mySym]);
// user.age = 23;
// console.log(user);
// Object.freeze(user); // yo vanda tala kunai value add gareko xa vani teslai add huna didaina
// user.name = "Manish shrestha";
// user.blabla = "suzata";

user.greeting = function () {
  console.log(`Hello, ${this.name}. You are ${this.age} years old`);
};

// console.log(user.greeting());

const tinderuser = new Object();

tinderuser.name = "Anish Shrestha";
tinderuser.age = 23;
tinderuser.status = "Unmarried";
// console.log(tinderuser);

const regularUser = {
  email: "user@gmail.com",
  userDetails: {
    fullname: {
      f_name: "Anish",
      middle_name: "man",
      l_name: "shrestha",
    },
  },
};

// console.log(regularUser.userDetails.fullname.f_name);

const newObj = {
  a: 1,
  b: 2,
};
const newObj1 = {
  c: 3,
  d: 4,
};
const newObj2 = {
  e: 5,
  f: 6,
};

const newObj3 = Object.assign({}, newObj, newObj1, newObj2);
// console.log(newObj3);

const arr = [
  {
    name: "Anish",
    age: 21,
  },
  {
    name: "suzata",
    age: 18,
  },
  {
    name: "srijana",
    age: 19,
  },
];

// console.log(arr[1].name);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));

// object de structure

const courseDetails = {
  courseName: "JavaScript",
  coursePrice: "1000000",
  courseInstructor: "Anup",
};

const { courseInstructor } = courseDetails;
console.log(courseInstructor);

courseDetails.courseInstructor = "anish";
const { courseInstructor: instructor } = courseDetails;
console.log(instructor);
