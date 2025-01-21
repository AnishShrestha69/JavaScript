"use strict";

var isLoggedIn = true;
var bankBalance = 10000;
var verified = true;

if (isLoggedIn && verified && bankBalance >= 2000) {
  console.log("Purchase Successful");
} else {
  console.log("Check Your details before purchasing this item");
}

if (isLoggedIn || verified) {
  console.log("Welcome to website");
}