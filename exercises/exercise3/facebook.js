class user {
    constructor(){
        this.name = ""
        this.last_name = ""
        this.user_name = ""
        this.email = ""
        this.country = ""
        this.city = ""
        this.address = ""
    }    
}


class post {
    constructor(){
        this.user_name = ""
        this.content = ""
        this.tags = ""
        this.likes = 23
        this.comments = []
    }
}

const biography = {
    constructor(){
        this.user_name = ""
        this.profile_image = ""
        this.background_image = ""
        this.recent_activity = []
        this.friends = {}
        this.events = []
        this.likes = []
    }
}


