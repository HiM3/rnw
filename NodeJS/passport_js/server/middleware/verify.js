const jwt = require('jsonwebtoken')
exports.verifyUser = async (req,res,next)=>{
    try {
        console.log(req.headers.authorization)
        let token = req.headers.authorization
        if(!token){
            res.json({
                success:false,
                message:"token not found"
            })
        }
    
        // console.log(token.split(" ")[1])
        token = token.split(" ")[1]
        console.log(token)
        const verifyUser = jwt.verify(token,process.env.secret_key)
        // res.json(verifyUser)
        if(!verifyUser){
             res.json({
                success:false,
                message:"you are not authenticate"
            })
        }
        req.user = verifyUser
        next()
    } catch (error) {
        res.json({
            success:false,
            message:"token expired"
        })
    }
}