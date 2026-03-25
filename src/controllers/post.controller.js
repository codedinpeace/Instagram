const ImageKit = require('@imagekit/nodejs')
const {toFile} = require('@imagekit/nodejs')
const postModel = require('../models/post.model')

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

  const username = req.user

  const post = await postModel.create({
    caption:req.body.caption,
    imgUrl:uploadedFile.url,
    user:username
  })

  res.status(200).json({message:"Post created successfully", post})

} catch (error) {
    console.log(error)
}

}

const getAllPosts = async (req,res) => {
  
}

const getSinglePost = async (req,res) => {

}

module.exports = {
    createPost,
    getAllPosts,
    getSinglePost
}