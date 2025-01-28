"use strict";

var shoppingCart = [{
  id: 1,
  name: "Wireless Bluetooth Headphones",
  category: "Electronics",
  price: 59.99,
  quantity: 2,
  image: "headphones.jpg"
}, {
  id: 2,
  name: "Gaming Mouse",
  category: "Electronics",
  price: 29.99,
  quantity: 1,
  image: "mouse.jpg"
}, {
  id: 3,
  name: "Notebook (Set of 3)",
  category: "Stationery",
  price: 14.99,
  quantity: 3,
  image: "notebooks.jpg"
}, {
  id: 4,
  name: "Insulated Water Bottle",
  category: "Home & Kitchen",
  price: 19.99,
  quantity: 1,
  image: "water-bottle.jpg"
}, {
  id: 5,
  name: "Yoga Mat",
  category: "Fitness",
  price: 24.99,
  quantity: 1,
  image: "yoga-mat.jpg"
}];
var totalMoney = shoppingCart.reduce(function (acc, item) {
  return acc + item.price;
}, 0);
console.log(totalMoney); // const totalCost = shoppingCart.reduce(
//   (price, currentvalue) => price + currentvalue,
//   0
// );