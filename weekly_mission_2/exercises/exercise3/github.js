class repo {
    constructor(){
      this.name = ""
      this.author = ""
      this.language = ""
      this.numberOfCommits = ""
      this.stars = ""
      this.forks = ""
      this.issues_open = 0
      this.issues_close = 0
    }
    
    getTotalIssues(){
      return this.issues_open + this.issues_close
    }
    
    getGeneralInfo(){
      return `This repository ${this.name} was created by ${this.author}`
    }
}

class Issue {    
    constructor(){
       this.title = ""
       this.repositoryNameAssociated = ""
       this.status = ""
       this.numberOfComments = ""
       this.labels = ""
       this.author = ""
       this.dateCreated = ""
       this.lastUpdated = ""
    }
    
    getTitleAndAuthor(){
        return this.title
    }
    getGeneralInfo(){
        return `This issue ${this.title} was created by ${this.author}`
    }
}
   