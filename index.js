const express=require('express')
const mongoose = require('mongoose')
const pageroute=require('./routes/pageroute')
const app=express();
const cors = require('cors')

const serverconnect = () => {
    return mongoose.connect('mongodb+srv://database:UNQUidrGUEYBbYxd@cluster0.3izcja8.mongodb.net/?retryWrites=true&w=majority')
  }

  app.use(cors())
  app.use(express.json())
  app.use('/', pageroute)




serverconnect().then((data) => {
    console.log('dataBase connected')
  }).catch(err => console.log(err))

app.listen('8987',()=>{
    console.log('server')
})