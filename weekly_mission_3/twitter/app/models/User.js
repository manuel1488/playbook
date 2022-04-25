class User{
    constructor(id, username, name, bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }
    
    getUsername(){
        return this.name
    }

    getBio(){
        return this.bio
    }

    getDateCreated(){
        return this.dateCreated
    }

    getLastUpdated(){
        return this.lastUpdated
    }

    /**
     * @param {string} username
     */
    set setUsername(username){
        this.username = username
        this.lastUpdated = Date.now()
    }

    set setBio(bio){
        this.bio = bio
    }
    
}


module.exports = User