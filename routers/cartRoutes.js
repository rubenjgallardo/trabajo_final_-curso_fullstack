const express = require('express')
const route = express.Router()
const cartControllers = require('../controllers/cartControllers')
const auth = require("../middlewares/auth")
const isAdmin = require("../middlewares/isAdmin")


//route.get("/", auth, cartControllers.get)
//route.post("/", auth, isAdmin, cartControllers.create)
route.put("/", auth, cartControllers.update)
//route.delete("/", auth, isAdmin, cartControllers.remove)


module.exports = route