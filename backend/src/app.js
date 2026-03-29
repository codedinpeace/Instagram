require('dotenv').config()
const cors = require('cors')
const express = require('express')
const connectDb = require('./config/connectDb')
const authRouter = require('./routes/auth.routes')
const cookieParser = require('cookie-parser')
const postRouter = require('./routes/post.routes')
const followRouter = require('./routes/follow.routes')

const app = express()

// Database
connectDb()

// middlewares
app.use(express.json())
app.use(cookieParser())

// cors
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"  
}))

// routes
app.use("/api/auth", authRouter)
app.use("/api/post", postRouter)
app.use("/api/user/", followRouter)

module.exports = app