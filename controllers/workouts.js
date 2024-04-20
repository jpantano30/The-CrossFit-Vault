const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Workout = require('../models/workouts.js')
const workoutSeed = require('../seeds/workoutSeed.js')
const User = require('../models/users.js')

const moment = require('moment')


router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find({}) // fetching the workouts
    const categories = [...new Set(workouts.map(workout => workout.category))] // pull out categories
    res.render('indexWODs.ejs', { workouts, categories }) // send workouts and categories to front end 
  } catch (err) {
    console.error('Failed to fetch workouts: ', err)
    res.status(500).send('Error fetching workouts')
  }
})

// search route - search workouts by name or category
router.get('/searchWorkouts', async (req, res) => {
  try {
    const query = req.query.query // get query from search bar
    const workouts = await Workout.find({ // search workout collection
      $or: [ // logical OR operation
        { name: { $regex: query, $options: 'i' } }, // mongoDB operator regex = regular expression searches. used to match workout name and category against the search query 
        { category: { $regex: query, $options: 'i' } } // 'i' = makes the regex case-insensitive for easier matching of the search query
      ]
    })
    const categories = [...new Set(workouts.map(workout => workout.category))] // maps over array of workouts returned from db and pull out the category for each workout. // set = collection of unique values --> converts the array of categories into a set, and removes duplicates
    res.render('indexWODs.ejs', { workouts, categories, query })
  } catch (err) {
    console.log('Failed to render search page: ', err)
    res.status(500).send('Error rendering search page')
  }
})

// random workout (workout of the day) Route
router.get('/WOD', async (req, res) => {
  try {
    const randomWorkouts = await Workout.aggregate([{ $sample: { size: 1 } }]) // fetch one workout randomly
    // if (randomWorkouts.length) {
      res.render('WOD.ejs', { workout: randomWorkouts[0] })
  } catch (err) {
    console.error('Failed to fetch a random workout:', err)
    res.status(500).send('Error fetching a random workout')
  }
})
// new route - renders new form
router.get('/new', (req, res) => {
  res.render('newWOD.ejs')
})

// seed route - adds workout data
router.get('/seed', async (req, res) => {
  await Workout.deleteMany({})
  await Workout.create(workoutSeed)
  res.redirect('/workouts')
})

// show route - shows details for a specific workout
router.get('/:id', async (req, res) => {
  const foundWorkout = await Workout.findById(req.params.id)
  res.render('showWOD.ejs', { workout: foundWorkout })
})
// put route - update a specific workout
router.put('/:id', async (req, res) => {
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true }) // update the workout and return new version
    res.redirect('/workouts/' + updatedWorkout.id) // redirect to updated workouts page 
  } catch (err) {
    console.log('ERROR IN EDIT ROUTE (PUT): ', err)
    res.status(500).send(err)
  }
})

// delete route - delete a workout
router.delete('/:id', async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id)
    res.redirect('/workouts')
  } catch (err) {
    console.log('ERROR IN DELETE REQUEST: ', err)
    res.status(500).send(err)
  }
})

// post route - create a workout
router.post('/', async (req, res) => {
  try {
    await Workout.create(req.body) // create a workout with form data
    res.redirect('/workouts')
  } catch (err) {
    console.log('ERROR WITH WORKOUT POST: ', err)
    res.status(500).send(err)
  }
})


// edit route - shows the form for edditing a specific workout 
router.get('/:id/edit', async (req, res) => {
  const foundWorkout = await Workout.findById(req.params.id)
  res.render('editWOD.ejs', { workout: foundWorkout }) // render form with workout data
})


// Handle favorites
router.post('/:id/favorite', async (req, res) => {
  try {
    const workoutId = new mongoose.Types.ObjectId(req.params.id) // make sure it is a valid ObjectID
    const userId = req.session.currentUser.id // get user ID from session
    const user = await User.findById(userId) // find user by ID

    console.log("Received isFavorite: ", req.body.isFavorite)

    const isFavorite = req.body.isFavorite
    if (isFavorite) {
      if (!user.favoritedWorkouts.includes(workoutId)) {
        user.favoritedWorkouts.push(workoutId) // add to favorites if it has not been added already 
      }
    } else {
      const index = user.favoritedWorkouts.indexOf(workoutId)
      if (index !== -1) {
        user.favoritedWorkouts.splice(index, 1) // remove from favorites 
      }
    }
    await user.save() // save users favotites changes to db
    res.redirect('/users/favorites')
  } catch (err) {
    console.log('Error updating favorite status:', err)
    res.status(500).send(err)
  }
})

// Route to check the favorite status
router.get('/:id/favorite', async (req, res) => {
  try {
    const workoutId = req.params.id
    const userId = req.session.currentUser.id
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).send({ error: 'User not found' }) // handle user not found
    }
    const isFavorite = user.favoritedWorkouts.includes(workoutId) // check if workout is favorited 
    res.send({ isFavorite }) // return fav status
  } catch (err) {
    console.log('Error fetching favorite status:', err)
    res.status(500).send(err)
  }
})


router.post('/:id/addScore', async (req, res) => {
  const workoutId = req.params.id
  const userId = req.session.currentUser.id
  const inputDate = req.body.date
  try {
    const workout = await Workout.findById(workoutId)
    const formattedDate = moment(inputDate).format('MMM DD YYYY') // used express moment to format the date 
    // Add the user's score to the workout
    workout.userScores.push({ user: userId, score: req.body.score, date: formattedDate })
    await workout.save() 

    res.redirect(`/workouts/${workoutId}`)
  } catch (err) {
    console.log('Error adding score:', err)
    res.status(500).send('Error adding score')
  }
})

// Route for viewing scores of a workout
router.get('/:id/scores', async (req, res) => {
  try {
    const workoutId = req.params.id
    const workout = await Workout.findById(workoutId).populate('userScores.user', 'username') // Populate the user reference to get usernames
    if (!workout) {
      return res.status(404).send('Workout not found')
    }

    res.render('scores.ejs', { workout: workout, moment: moment })
  } catch (err) {
    console.error('Error fetching scores:', err)
    res.status(500).send('Error fetching scores')
  }
})

// Route for deleting a score from a workout
router.delete('/:workoutId/scores/:scoreId', async (req, res) => {
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
    res.redirect(`/workouts/${workoutId}/scores`)
  } catch (err) {
    console.log('Error deleting score:', err)
    res.status(500).send('Error deleting score')
  }
})

module.exports = router