class User {
    constructor(username){
        this.username = username
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username),
        this.email = email,
        this.password = password
    }
    encreptPassword(){
        return `pass ${this.password}http`
    }
}

const bord = new Teacher("sandeep", "sandeep23ra@gmail.com", "sdp1234");
console.log(bord.encreptPassword());