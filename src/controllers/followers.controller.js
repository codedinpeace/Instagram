const userModel = require("../models/user.model")
const followModel = require('../models/followers.model')

const followUserController = async (req,res) => {

    const followeeUsername = req.params.username
    const followerUsername = req.user.username

    try {
        const userToBeFollowed = await userModel.findOne({username:followeeUsername})
        if(!userToBeFollowed) return res.status(404).json({message:"User doesnt exist"})
            
            const duplicateUser = followeeUsername === followerUsername
            if(duplicateUser) return res.status(409).json({message:"Cant follow yourself"})

            await followModel.create({
                follower:followerUsername,
                followee:followeeUsername
            })

            res.status(200).json({message:`You followed ${followeeUsername}`})
        } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error);
        
    }
}

const unFollowUserController = async (req,res) => {
    const followeeUsername = req.params.username
    const followerUsername = req.user.username

    try {
        const isFollowing = await followModel.findOne({
            follower:followerUsername,
            followee:followeeUsername
        })

        if(!isFollowing) return res.status(400).json({message:"You dont follow this user"})

            if(followeeUsername === followerUsername) return res.status(400).json({message:"Cant unfollow yourself"})

                await followModel.findOneAndDelete({
                    follower:followerUsername,
                    followee:followeeUsername
                })

                res.status(200).json({message:`Unfollowed ${followeeUsername}`})
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"something went wrong"})
    }
}

module.exports = {
    followUserController,
    unFollowUserController,
                  }