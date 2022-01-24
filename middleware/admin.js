const jwt = require('jsonwebtoken')
const User = require('../models/user')
const config_data = require('./../../config.json')

module.exports = (req, res, next)=>{
    const {authorization} = req.headers
    if(!authorization){
        return res.status(400).json({message : 'You must have to logged in'})
    }else{
        const token = authorization.replace("Bearer ", "")
        jwt.verify(token, config_data.JWT_KEY, (err, payLoad)=>{
            if (err){
                throw err;
            }else{
                const _id = payLoad.id
                User.findById(_id).then((userData)=>{
                    if(userData.role == "admin"){
                        req.user = userData
                        next();
                    }else{
                        return res.status(400).json({message : "You are not authorized"})
                    }
                })
            }
        })
    }
}