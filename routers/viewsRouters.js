 const express = require('express')
 const route = express.Router()
 const viewControllers = require('../controllers/viewsControllers')
 const authMiddleware = require("../middlewares/auth")
 const isAdmin = require("../middlewares/isAdmin")
 route.get('/login',viewControllers.login)
 route.get('/register',viewControllers.register)
 route.get('/', authMiddleware, viewControllers.home)
 route.get('/dashboard', authMiddleware , isAdmin, viewControllers.dashboard)


 module.exports = route