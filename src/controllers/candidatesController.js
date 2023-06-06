const { CandidateCreate } = require("../services/Candidates/create")
const { CandidateVote } = require("../services/Candidates/vote")
const { ElectionInfo } = require("../services/Election/electionInfo")

class CandidateController {
    async create(req, res) {
        try {
            const service = new CandidateCreate()
            const result = await service.execute(req.body)
            
            if(result instanceof Error) { return res.status(400).send({ message: result.message }) }
            
            return res.status(201).send(result)
        } catch(error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error." })
        }
    }
    
    async vote(req, res) {
      const { serialized } = req.params
      const { name, candidate, electoralParty, number } = req.body
      
        try {
            const service = new CandidateVote()
            const result = await service.execute({
              serialized,
              name,
              candidate,
              electoralParty,
              number
            })
            
            if(result instanceof Error) { return res.status(400).send({ message: result.message }) }
            
            return res.status(201).send(result)
        } catch(error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error." })
        }
    }
    
    async info(req, res) {
      try {
        const service = new ElectionInfo()
        const result = await service.execute()
        
        if(result instanceof Error) { return res.status(400).send({ message: result.message }) }
            
        return res.status(201).send(result)
      } catch(error) {
        console.error(error)
        return res.status(500).send({ message: "Internal server error." })
      }
    }
}

module.exports = { CandidateController }
