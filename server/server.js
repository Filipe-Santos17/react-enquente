const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const routes = require("./routes/routes")

const app = express()

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))

require("dotenv").config()
require("./db")

/*
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
*/

app.use(cors())
app.use(morgan("dev")) //Only in tests
app.use("/api", routes)

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Host running in http://localhost:${port}/api`))