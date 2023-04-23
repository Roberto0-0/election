const { Router } = require("express")
const { CandidateController } = require("../controllers/candidatesController")

class Routes {
    constructor() {
        this.router = Router()
        
        this.candidate()
    }
    
    candidate() {
        this.router.post("/candidate/create", new CandidateController().create)
        this.router.get("/candidates", new CandidateController().readAll)
    }
}

module.exports = Routes