const { Candidates } = require("../models/candidates/index")

class CandidateService {
    async create({ name, electoralParty, number}) {
        const candidate = await Candidates.findOne({
            where: { name: name }
        })
        
        if(candidate) { return new Error("Candidate already exist.") }
        
        const newCandidate = await Candidates.create({ name, electoralParty, number })
        
        return {
            message: "Candidate created successfully.",
            data: newCandidate
        }
    }
    
    async readAll() {
        const candidates = await Candidates.findAll({
            order: [
                ["whishes", "DESC"]
            ]
        })
        
        return candidates
    }
}

module.exports = { CandidateService }