function loginDetails(username) {
  if (!username) {
    // !username checks if the value is truthy of falsy
    console.log("Please enter your name");
  } else {
    return `${username} just logged in`;
  }
}
// console.log(loginDetails("anish"));

// ########################### NEW FUNCTION EXAMPLE #########################

function addTwoNumber(a, b) {
  return a + b;
}
const result = addTwoNumber(10, 20);
// console.log("result: ", result);

function calculateCartNumber(...value1) {
  return value1;
}
// console.log(calculateCartNumber(10, 12, 12, 121, 21));

function randomNumber(val1, val2, ...val3) {
  return val3;
}
// console.log(randomNumber(12, 21, 31, 11));

const mobileDetails = {
  mobileName: "samsung",
  price: 1999,
};
function handleObj(anyObj) {
  console.log(
    `The mobile I am buying is ${anyObj.mobileName} and the price of it is ${anyObj.price}`
  );
}
// handleObj(mobileDetails);
handleObj({
  mobileName: "Realme 9 Pro",
  price: 300,
});

const newArr = [100, 200, 300, 400]; // new array created
function returnArrValue(myArr) {
  //
  return myArr[1];
}
// console.log(returnArrValue(newArr));
console.log(returnArrValue([100, 2000, 30000]));
