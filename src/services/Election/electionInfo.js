const { CandidateRepository } = require("../../repositories/CandidateRepository")
const { VoterRepository } = require("../../repositories/VoterRepository")
const { InfoRepository } = require("../../repositories/InfoRepository")

class ElectionInfo {
  async execute() {
    const info = await InfoRepository.findOne({ where: { id: 1 } })
    
    if(!info) { return new Error("Info error.") }
    
    const allVoters = 22
    var percentageOfVotes = (info.wishes/allVoters) * 100
    
    return {
      percentageOfVotes,
      lastVote: info.updatedAt
    }
  }
}

module.exports = { ElectionInfo }
