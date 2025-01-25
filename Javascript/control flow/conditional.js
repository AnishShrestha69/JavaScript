// const isLoggedIn = true;
// const bankBalance = 10000;
// const verified = true;

// if (isLoggedIn && verified && bankBalance >= 2000) {
//   console.log("Purchase Successful");
// } else {
//   console.log("Check Your details before purchasing this item");
// }
// if (isLoggedIn || verified) {
//   console.log("Welcome to website");
// }

// num = 11;
// if (num > 10) {
//   console.log("hello");
// } else if (num < 10) {
//   console.log("bye bye");
// } else if (num <= 10) {
//   console.log("hello his");
// }

const anyObj = {
  name: "Anish Shrestha",
};
if (Object.keys(anyObj).length === 0) {
  console.log("Object is empty");
} else {
  // console.log(anyObj.name);
}

// nullish coalescing operator
// this operator checks if the value is null || undefined
// if the value is null or undefined the it passes the another  value
// in the following condition 10 will be assigned to val1
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = NaN ?? 12;
// it will not work in the context of NaN

// val1 = undefined ?? 200;
// console.log(val1);

userName = {
  firstName: " ",
  lastName: " ",
};

// userName.firstName = "Anish";

// userName = undefined ?? userName.firstName;
// console.log(userName);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$ ternairy operator $$$$$$$$$$$$$$$$$$$$$$$$$$
// syntax condition ? true: false

const gamePrice = 9999;

gamePrice <= 1000 ? console.log("Buy Game") : console.log("Don't Buy Game");
