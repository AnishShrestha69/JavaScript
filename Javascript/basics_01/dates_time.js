let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());

// let myCreateDate = new Date(2024, 0, 20);
// console.log(myCreateDate.toLocaleDateString());

let myCreateDate1 = new Date(2023, 12, 12);
// console.log(myCreateDate1.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreateDate1.getTime());

// console.log(Math.round(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
