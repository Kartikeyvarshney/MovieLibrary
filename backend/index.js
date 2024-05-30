const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})