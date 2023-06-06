const express = require("express")
const bodyParser = require("body-parser")
const { Routes } = require("./routes/index")
const { sequelize } = require("./database/index")

class App {
    constructor() {
        this.app = express()
        this.sequelizeSync = sequelize
        
        this.middlewares()
        this.routes()
    }
    
    middlewares() {
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
    
        this.sequelizeSync.sync()
    }
    
    routes() {
        this.app.use(new Routes().router)
    }
}

module.exports = { App }
