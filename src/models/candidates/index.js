const { Sequelize, DataTypes } = require("sequelize")
const { sequelize } = require("../../database/index")

const Candidates = sequelize.define("candidates", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  electoralParty: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  
  number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
  wishes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

module.exports = { Candidates }