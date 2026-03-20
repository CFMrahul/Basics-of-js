// class User {
//     constructor(username, password, email){
//         this.username = username,
//         this.password = password,
//         this.email = email
//     }

//     encreaptedPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const dt = new User("rana", 123, "rana999@gmail.com");
// console.log(dt.encreaptedPassword())
// console.log(dt.changeUsername())

function User(username, password, email) {
  ((this.username = username),
    (this.password = password),
    (this.email = email));
}

User.prototype.encreptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.createUser = function() {
    return `${this.username.toUpperCase()}`
}

const data = new User("soni", "soni9128", "sonir@gmail.com");
console.log(data.encreptPassword())
console.log(data.createUser())
