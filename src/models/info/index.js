const { Sequelize } = require("sequelize")
const { sequelize } = require("../../database/index")

const Info = sequelize.define("info", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  
  wishes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
  
})

module.exports = { Info }