const express = require('express')
const methodOverride = require('method-override')
const app = express()
const session = require('express-session')
const bcrypt = require('bcrypt')
require('dotenv').config()
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT



const isAuthenticated = (req, res, next) => {
  console.log(req.session.currentUser)
  if(req.session.currentUser){
    next()
  } else {
    res.redirect('/users/login')
  }
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

const userController = require('./controllers/users.js')
app.use('/users', userController)
app.use(isAuthenticated)
const workoutsController = require('./controllers/workouts.js')
app.use('/workouts', workoutsController)




mongoose.connect(mongoURI)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.on('connected', () => console.log('connected to mongo'))
db.on('disconnected', () => console.log('mongo disconnected'))



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
