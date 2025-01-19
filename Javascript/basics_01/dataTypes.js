// primitive datatypes
// String, number, symbol, Boolean, null, undefined, BigInt

const name = "anish"
const a = 10
const isLoggedIn = true
const temp = null
const girlfriendName = undefined;
const BigNumber = 10101010101010101010101010n
const id1 = Symbol('1234')


// nonprimitive datatypes
// Array, objects, functions

const friendList = ["Anisha", "Rohita", "Smriti", "Ritika"]

const myDetails = {
    Name: "Anish Shrestha",
    Age: 23,
    Address: "Pharping", 
    sucess: null
};

function addTwoNumbers(a, b) {
    return a + b
}
addTwoNumbers(10,20)

console.log(typeof addTwoNumbers)