const gameName = new String(`iceXwarrior`);
const gameName1 = "iceXwarrior";

// console.log(gameName.charAt('1'))
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.indexOf("i"));

const newString = gameName1.substring(-7, 5);
// console.log(newString);

const anotherString = gameName1.slice(-7, 7);
// console.log(anotherString);

// gameName1.slice(start, end):

// The slice method extracts a portion
//  of a string from the start index to (but not including) the end index.
// If start is negative, it is treated as string.length + start.
// in the given context
//  start = -7
//  String.length = 11
//  11-7 = 4

const myName = "       Anish Shrestha       ";
// console.log(myName);
// console.log(myName.trim());

const message = "She does not know who I am";
console.log(message.replace("does not know who I am", "loves me"));

// console.log(message.includes("love"));

console.log(message.split("-"));
