"use strict";

// named iife
(function username() {
  console.log("My name is anish shrestha");
})(); // unnamed iife


(function (name) {
  console.log("DB CONNECTED VO HAI ".concat(name));
})("anish");