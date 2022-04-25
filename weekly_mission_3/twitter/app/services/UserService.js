const User = require('./../models/User')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, 'Sin bio')
    }    
    
    static getInfo(user){
        let arr = []
        arr.push(user.id)
        arr.push(user.username)
        arr.push(user.name)
        arr.push(user.bio)

        return arr
    }

    static updteUserUserName(user, newUserName){
        user.setUsername = newUserName
    }

    /**
     * @param {Object[]} users
     */
    static getAllUsersNames(users){
        let all_users = users.reduce((prev, next) => {
            return prev + ', ' + next.username
        },''
        )

        return all_users
    }
}


module.exports = UserService