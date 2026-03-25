const express = require('express')
const connectDb = require('./config/connectDb')
const authRouter = require('./routes/auth.routes')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()

// Database
connectDb()

// middlewares
app.use(express.json())
app.use(cookieParser())

// routes
app.use("/api/auth", authRouter)


module.exports = app