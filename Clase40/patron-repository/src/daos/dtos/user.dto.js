class UserDTO{
    constructor(user){
        this.name = user.name;
        this.email = user.email;
    }
}

module.exports = {UserDTO}