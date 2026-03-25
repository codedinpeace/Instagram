const express = require('express')
const postRouter = express.Router()
const postController = require('../controllers/post.controller')
const multer = require('multer')
const validateUser = require('../middlewares/validateUser')
const upload = multer({storage:multer.memoryStorage()})

postRouter.post("/create-post",  upload.single("image"), validateUser, postController.createPost)
postRouter.get("/get-posts", validateUser, postController.getAllPosts)
postRouter.get("/get-post", validateUser, postController.getSinglePost)

module.exports = postRouter
