const { CandidateService } = require("../services/candidateService")

class CandidateController {
    async create(req, res) {
        try {
            const service = new CandidateService()
            const result = await service.create(req.body)
            
            if(result instanceof Error) { return res.status(400).send({ message: result.message }) }
            
            return res.status(201).send(result)
        } catch(error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error!" })
            
        }
    }
    
    async readAll(req, res) {
        try {
            const service = new CandidateService()
            const result = await service.readAll()
            
            return res.status(200).send(result)
        } catch(error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error!"} )
        }
    }
}

module.exports = { CandidateController }
