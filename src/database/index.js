const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('election', 'root', 'admin', {
  host: 'localhost',
  dialect: "mariadb",
  timezone: '-03:00',
  dialectOptions: {
    useUTC: false
  }
})

try {
  sequelize.authenticate()
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = { sequelize }
