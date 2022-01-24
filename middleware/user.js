const jwt = require('jsonwebtoken')
const User = require('../models/user')
const config_data = require('./../../config.json')

module.exports = (req, res, next)=>{
    const {authorization} = req.headers
    if(!authorization){
        res.status(400).json({message : 'You must have to logged In'})
    }else{
        const token = authorization.replace("Bearer ", "")
        jwt.verify(token, config_data.JWT_KEY, (err, payload)=>{
            if(err){
                throw err
            }else{
                const _id = payload.id
                User.findById(_id).then((userData)=>{
                    req.user = userData
                    next();
                })
            }
        })
    }
}