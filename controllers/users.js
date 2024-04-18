const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/users.js')
const Workout = require('../models/workouts.js')
const moment = require('moment')
// get route - renders new users 
router.get('/', (req, res) => {
  res.render('newUser.ejs')
})

router.get('/login', (req, res) => {
  res.render('login.ejs')
})

// post route - create a user
router.post('/', async (req, res) => {
  try {
    console.log('before hash: ', req.body)
    const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
    })
    const savedUser = await newUser.save()
    console.log('User created: ', savedUser)
    res.redirect('/workouts')
  } catch (err) {
    console.log('ERROR WITH USER POST: ', err)
    res.status(500).send('Please try a different username or password.')
  }
})

// post route - login a user
router.post('/login', async (req, res) => {
  try {
      // check if the user exists in db
      const foundUser = await User.findOne({username: req.body.username})
      console.log('Found user:', foundUser)
      // if found 
      if(foundUser) {
          const isAMatch = bcrypt.compareSync(req.body.password, foundUser.password)
          if(isAMatch) {
              console.log('login successful')
              req.session.currentUser = { id: foundUser.id, username: foundUser.username
              }
              res.redirect('/workouts')
          } else {
              res.status(401).send('Username or password does not match or does not exist.') 
          } 
      } else {
          res.status(404).send('Username or password does not match or does not exist.')
      }
  } catch (err) {
      console.log(err)
      res.status(500).send('An error has occurred, please try again.')
  }
})
// favorites page route 
router.get('/favorites', async (req, res) => {
  if (!req.session.currentUser) {
    return res.redirect('/users/login') // send to log in if not logged in 
  }
  try {
    const user = await User.findById(req.session.currentUser.id).populate('favoritedWorkouts') // find user and populate saved workouts/ favorites
    if (!user) {
      return res.status(404).send('User not found')
    }
    res.render('userFavorites.ejs', { user }) // render fav page with user data
  } catch (error) {
    console.error('Error rendering favorites page:', error)
    res.status(500).send('Internal Server Error')
  }
})

// get route to view user scores page
router.get('/scores', async (req, res) => {
  try {
    const userId = req.session.currentUser.id
    if (!userId) {
      return res.redirect('/users/login')
    }
    console.log('Type of userId:', typeof userId);
    const workouts = await Workout.find({
      'userScores.user': userId
    }).populate('userScores.user', 'username')

    const filteredWorkouts = workouts.filter(workout => workout.userScores.length > 0) // filter workouts that have user scores
    res.render('userScores.ejs', { user: { savedWorkouts: filteredWorkouts }, moment: moment })
  } catch (err) {
    console.log('Error fetching scores: ', err)
    res.status(500).send('Error fetching scores')
  }
})


router.delete('/scores/:workoutId/:scoreId', async (req, res) => {
  console.log('Workout ID:', req.params.workoutId);
  console.log('Score ID:', req.params.scoreId)
  try {
      const workoutId = req.params.workoutId
      const scoreId = req.params.scoreId
      const workout = await Workout.findById(workoutId)
      if (!workout) {
        return res.status(404).send('Workout not found')
      }
      // Find the index of the score in the userScores array
      const index = workout.userScores.findIndex(score => score.id.toString() === scoreId)
      
      // Remove the score from the userScores array
      workout.userScores.splice(index, 1)
      
      await workout.save()
  
      res.redirect('/users/scores')
    } catch (err) {
      console.log('Error deleting score:', err)
      res.status(500).send('Error deleting score')
    }
})


router.delete('/logout', (req, res) => {
  req.session.destroy(err => {
      if(err) {
          console.log(err, '  logout failed')
          res.status(500).send('Logout failed, please try again')
      } else {
          res.redirect('/user/login')
      }
  })
})


module.exports = router

