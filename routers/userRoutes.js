const express = require('express')
const route = express.Router()
const userControllers = require('../controllers/userControllers')
route.get('/login',userControllers.login)
route.get('/register',userControllers.register)


module.exports = route