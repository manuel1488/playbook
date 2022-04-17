const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
}

const Issue = {    
    "title": "title",
    "repositoryNameAssociated": "repositoryNameAssociated",
    "status": "status",
    "numberOfComments": "numberOfComments",
    "labels": "labels",
    "author": "author",
    "dateCreated": "dateCreated",
    "lastUpdated": "lastUpdated",
    getTitleAndAuthor : function(){
        return this.title
    },
    getGeneralInfo: function(){
        return `This issue ${this.title} was created by ${this.author}`
    }
}
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())