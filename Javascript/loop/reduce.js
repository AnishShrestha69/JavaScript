// Array.reduce(
//   (accumulator, currentvalue) => accumulator + currentvalue,
//   initiator
// );

// Array.reduce(
//   (accumulator, currentvalue) => {
// return accumulator + currentvalue},
//   initiator
// );
// ----> syntax for reduce

const num1 = [1, 2, 3, 4, 5];

// const myTotal = num1.reduce((acc, curVal) => {
//   return acc + curVal;
// }, 0);
// console.log(myTotal);

const myTotal = num1.reduce((acc, curVal) => acc + curVal, 0);
// console.log(myTotal);
