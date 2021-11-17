const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors({origin: "http://127.0.0.1:5500", methods:["GET", "PUT"], credentials:true}))

app.put("/data", (req, res) => {
    res.json({name:"david", age:21})
} )

app.listen(3000)