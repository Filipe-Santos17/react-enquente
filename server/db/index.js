const sequelize = require("sequelize")
const data = require("./config/configDb")
const Enquent = require("./models/enquentModels")

const db = new sequelize(data)

db.authenticate()
.then(() => console.log("Connection Successful"))
.catch( erro => console.log(`Erro: ${erro}`))

Enquent.init(db)

module.exports = db