const express = require('express')
const bodyParser = require('body-parser')
const viewsRouter = require('./routers/viewsRouters')
const userRoutes = require('./routers/userRoutes')
const mongoose = require("mongoose")
const cors = require('cors')
const app = express()
const port = 3000


app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use('/',viewsRouter)

app.use('/api/',userRoutes)

app.listen(port, async () => {
  try{
  await mongoose.connect('mongodb://127.0.0.1:27017/proyecto_final');
  console.log(`Example app listening on port ${port}`)
  }catch(error){
    console.log("Error para conectar con mongoDB",error)
  }
  
})