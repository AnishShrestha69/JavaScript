const anyObj = {
  username: "Anish Shrestha",
  age: 19,
  welcomeMessage: function () {
    console.log(`${this.username},  welcome to paradise`);
    // console.log(this);
  },
};
// anyObj.welcomeMessage();
// anyObj.username = "Suzata Shrestha";
// anyObj.welcomeMessage();

// console.log(this);

// function any() {
//   let username = "Anish Shrestha";
//   console.log(this.username);
// }
// any();

const any1 = () => {
  let username = "Anish Shrestha";
  console.log(this.username);
};
any1();

const addTwo = (a, b) => {
  return a + b;
}; // explicit return
const addTwoNumber = (c, d) => c + d; // implicit return

console.log(addTwoNumber(12, 1212));
console.log(addTwo(10, 1221));

// syntax of arrow function
// () =>{

// }
