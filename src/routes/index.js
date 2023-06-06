const { Router } = require("express")
const { CandidateController } = require("../controllers/candidatesController")

class Routes {
    constructor() {
        this.router = Router()
        
        this.candidate()
        this.election()
    }
    
    candidate() {
        this.router.post("/candidate/create", new CandidateController().create)
        this.router.post("/candidate/voter/:serialized", new CandidateController().vote)
    }
    
    election() {
      this.router.get("/election/info", new CandidateController().info)
    }
}

module.exports = { Routes }
