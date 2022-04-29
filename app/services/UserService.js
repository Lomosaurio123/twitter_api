const User = require('./../models/user')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio")
    }

    static getInfo (user) {
        return Object.values(user)
    }

    static updateUserUsername(user, username) {
        user.setUsername = username
    }
}

module.exports = UserService