const person = {
  username: "rana@shaho",
  age: 34,
  greet: function () {
    console.log("hello");
  },
};

function User(username, logInCount, isLoggedIn) {
  this.username = username;
  this.logInCount = logInCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const data1 = new User("goldy", 34, true);
const data2 = new User("silver", 23, false);
console.log(data1 instanceof User);
