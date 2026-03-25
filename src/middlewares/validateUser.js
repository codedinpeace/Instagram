const jwt = require('jsonwebtoken')

function validateUser(req,res,next) {
    const token = req.cookies.token
    if(!token) return res.status(404).json({message:"Token not found"})

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decoded.username
            next()
        } catch (error) {
            console.log(error)
        }
}

module.exports = validateUser