// Using `.call()`, we can use a method of one object for another object.

function setUser(username){
    this.username = username
}

function createUser(username, password, email){
// used .call() method to quick executed.
    setUser.call(this, username)
    this.password = password,
    this.email = email
}

let data = new createUser("rana", "rana123", "rna124@gmail.com");
console.log(data)