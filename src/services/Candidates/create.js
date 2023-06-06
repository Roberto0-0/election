const { CandidateRepository } = require("../../repositories/CandidateRepository")

class CandidateCreate {
  async execute({ name, electoralParty, number }) {
    const candidate = await CandidateRepository.findOne({ where: { electoralParty: electoralParty } })
    
    if(candidate) { return new Error("Electoral Party aready exist.") }
    
    const newCandidate = await CandidateRepository.create({ name, electoralParty, number })
    return {
      sucesss_message: "Created successfully.",
      data: newCandidate
    }
  }
}

module.exports = { CandidateCreate }
