"use strict";

var anyObj = {
  username: "Anish Shrestha",
  age: 19,
  welcomeMessage: function welcomeMessage() {
    console.log("".concat(this.username, ",  welcome to paradise")); // console.log(this);
  }
};
anyObj.welcomeMessage();
anyObj.username = "Suzata Shrestha";
anyObj.welcomeMessage();
console.log(void 0);