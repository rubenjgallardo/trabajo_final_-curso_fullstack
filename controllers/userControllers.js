const User = require("../models/userModels")
const userUtils = require("../utils/userUtils")
const login = async (req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const user = await User.findOne({email: email})
    const matchPassword = userUtils.comparePassword(password,user.hash,user.salt)
    if (matchPassword) {
        
    } else {
        
    }
}

const register = async (req,res)=>{
    try {
    const email = req.body.email
    const password = req.body.password
    const photo = req.body.photo
    const name = req.body.name
    if (email && password && photo) {
            const hashSalt = userUtils.createHashAndSalt(password)
        await User.create({
            name: name,
            email: email,
            password: hashSalt,
            salt: hashSalt.salt,
            isAdmin: false,
        })
    } else {
        res.status(400).send("Datos Incompletos")
    }
    } catch (error) {
        res.status(500).send(error)
    }
    
}


module.exports = {
    login: login,
    register: register
} 