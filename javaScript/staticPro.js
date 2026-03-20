class User {
    constructor(username){
        this.username = username
    }
    // static is stope the useds.
    static logIn(){
        console.log(`this is user value.`)
    }
}

const users = new User("ravi");
// console.log(users)

class Store extends User {
    constructor(username, email){
        super(username),
        this.email = email
    }
}

const data = new Store("sujeet", "sujeetWeb@gmail.com");
data.logIn()