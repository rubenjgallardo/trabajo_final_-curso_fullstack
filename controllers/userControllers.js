const User = require("../models/userModels")
const userUtils = require("../utils/userUtils")
const Cart = require("../models/CartModel")

const login = async (req,res)=>{
    try {
        const email = req.body.email
        const password = req.body.password
        const user = await User.findOne({email: email})
        const matchPassword = userUtils.comparePassword(password,user.password,user.salt)
        if (matchPassword) {
            const token = userUtils.createToken(user)
            res.status(200).send(token)
        } else{
            res.status(400).send(" password no match")
        } 
    } catch (error) {
        console.log("error",error)
        res.status(500).send(error)
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
        const user = await User.create({
            name: name,
            email: email,
            password: hashSalt.hash,
            salt: hashSalt.salt,
            photo:photo,
            isAdmin: false
        })

        await Cart.create({
            userId: user._id
        })
        res.status(201).end()

    } else {
        res.status(400).send("Datos Incompletos")
    }
    } catch (error) {
        res.status(500).send(error)
    }
    
}


const logout = (req,res)=>{
    req.user = null
    res.clearCookies("token");
    res.status(200).end();
}



module.exports = {
    login: login,
    register: register,
    logout: logout
} 