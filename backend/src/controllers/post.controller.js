const ImageKit = require('@imagekit/nodejs')
const {toFile} = require('@imagekit/nodejs')
const postModel = require('../models/post.model')
const userModel = require('../models/user.model')

const imagekit = new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

const createPost = async (req,res)=>{
try {

  if(!req.file) return res.status(404).json({message:"File not found"})

  const uploadedFile = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer),'file'),
    fileName:'post',
    folder:'Instagram'
  })

  const userId = req.user.userId

  const post = await postModel.create({
    caption:req.body.caption,
    imgUrl:uploadedFile.url,
    user:userId
  })

  res.status(200).json({message:"Post created successfully", post})

} catch (error) {
    console.log(error)
}

}

const getAllPosts = async (req,res) => {
  try {
  const posts = await postModel.find({user:req.user.username})  
  res.status(200).json(posts)
  } catch (error) {
    console.log(error)
  }
}

const getSinglePost = async (req,res) => {
  const post = await postModel.findOne({user:req.params.username})
  if(!post) return res.status(404).json({message:"Post not found"})

    const user = await userModel.findOne({username:req.params.username})
    if(!user) return res.status(404).json({message:"User doesnt exist"})

      res.status(200).json({message:"Post Details fetched", post})
}

const getSinglePostDetails = async (req,res) => {
  const post = await postModel.findOne({_id:req.params.postId})
  if(!post) return res.status(404).json({message:"Post not found"})
    
    const validateUser = post.user === req.user.username
    if(!validateUser) return res.status(403).json({message:"You dont have access to this post"})
      
      res.status(200).json({message:"Post fetched", post})
}

const getFeed = async (req,res) => {
  const posts = await postModel.find().populate("user")
  res.status(200).json({posts})
}

module.exports = {
    createPost,
    getAllPosts,
    getSinglePost,
    getSinglePostDetails,
    getFeed
}