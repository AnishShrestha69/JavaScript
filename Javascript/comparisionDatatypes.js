// console.log(null >= 0)
// console.log(null == 0)
// console.log(null < 0)

// console.log(undefined >= 0)
// console.log(undefined == 0)
// console.log(undefined < 0)

// console.log("1" === 1)

// === checks the datatype also

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.table([id, anotherId])

// console.log(id === anotherId)

// console.log(typeof id)
// console.log(typeof anotherId)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack and heap memory

let a = 10;
a = 20
console.log(a)

let myDetails = {
    name: "Anish Shresyha",
    age: 23
}
let myDetails1 = myDetails;
myDetails1.age = 21

console.log(myDetails)
console.log(myDetails1)