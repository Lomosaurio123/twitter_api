const UserService  = require('./../services/UserService')

class UserView {
    
    static createUser(playload) {
        if(playload == null) {
            return {error: 'playload no existe'}
        }
        else if(typeof playload.username === 'string' && typeof playload.name === 'string' && typeof playload.id === 'number') {
            return UserService.create(playload.id, playload.username, playload.name)
        } else {
            return {error: 'Las propiedades del playload necesitan tener una valor válido'}
        }
    }
}

module.exports = UserView