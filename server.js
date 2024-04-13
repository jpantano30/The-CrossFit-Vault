//Dependencies 
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require ('mongoose')
const app = express()
const session = require('express-session')
const bcrypt = require('bcrypt')
const db = mongoose.connection
require('dotenv').config()


//Port 
const PORT = process.env.PORT



// Database 
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI)

// ERROR/ SUCCESS
db.on('error', console.error.bind(console, 'connection error:'))
db.on('connected', () => console.log('connected to mongo'))
db.on('disconnected', () => console.log('mongo disconnected'))


// Custom auth middleware
const isAuthenticated = (req, res, next) => {
  console.log(req.session.currentUser)
  if(req.session.currentUser){
    next()
  } else {
    res.redirect('/users/login')
  }
}

//middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))


// controllers
const userController = require('./controllers/users.js')
app.use('/users', userController)
app.use(isAuthenticated)
const workoutsController = require('./controllers/workouts.js')
app.use('/workouts', workoutsController)




// listener
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
