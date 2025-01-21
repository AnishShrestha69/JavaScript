const isLoggedIn = true;
const bankBalance = 10000;
const verified = true;

if (isLoggedIn && verified && bankBalance >= 2000) {
  console.log("Purchase Successful");
} else {
  console.log("Check Your details before purchasing this item");
}
if (isLoggedIn || verified) {
  console.log("Welcome to website");
}
