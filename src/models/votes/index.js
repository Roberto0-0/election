const { Sequelize } = require("sequelize")
const { sequelize } = require("../../database/index")

const Voters = sequelize.define("voters", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  
  serialized: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true
  },
  
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  
  candidate: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  
  electoralParty: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
  
})

module.exports = { Voters }