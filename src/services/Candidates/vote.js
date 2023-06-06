const { CandidateRepository } = require("../../repositories/CandidateRepository")
const { VoterRepository } = require("../../repositories/VoterRepository")
const { InfoRepository } = require("../../repositories/InfoRepository")

class CandidateVote {
  async execute({ serialized, name, candidate, electoralParty, number }) {
    const voter = await VoterRepository.findOne({ where: { serialized: serialized } })
    const candidates = await CandidateRepository.findOne({ where: { electoralParty: electoralParty } })
    const info = await InfoRepository.findOne({ where: { id: 1 } })
    
    if(voter) { return new Error("You have already voted.") }
    if(!candidate) { return new Error("Candidate not found.") }
    if(!info) {
      await InfoRepository.create({ wishes: 1 })
    } else {
      info.wishes += 1
      await info.save()
    }
    
    const newVoter = await VoterRepository.create({ serialized, name, candidate, electoralParty, number })
    
    candidates.wishes += 1
    
    await candidates.save()
    
    return { sucesss_message: "Successfully voted." }
  }
}

module.exports = { CandidateVote }
