if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Anish Shrestha";
  function two() {
    const website = "YouTube";
    console.log(username);
  }
  //   two();
  //   console.log(website);
}
// one();

function addOne(num) {
  return num + 1;
}
console.log(addOne(50));

const addTwo = function (num) {
  return num + 2;
};
addTwo(22);
