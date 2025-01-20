const anyObj = {
  username: "Anish Shrestha",
  age: 19,
  welcomeMessage: function () {
    console.log(`${this.username},  welcome to paradise`);
    // console.log(this);
  },
};
anyObj.welcomeMessage();
anyObj.username = "Suzata Shrestha";
anyObj.welcomeMessage();

console.log(this);
