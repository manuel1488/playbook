const UserService = require('./../services/UserService')

class UserView{
    static createUser(payload){
        if(payload === null){
            console.log('Error: payload is null')
            return { error: "el payload no existe." }
        }
        else if(typeof payload.username === 'string' && typeof payload.username === 'string' && typeof payload.id === 'number'){
            return UserService.create(payload.id, payload.username, payload.name)
        }
        else{
            return { error: "Las propiedades del payload necesitan tener un valor valido"}
        }
    }
}


module.exports = UserView