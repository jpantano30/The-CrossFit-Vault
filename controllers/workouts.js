const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Workout = require('../models/workouts.js')
const workoutSeed = require('../seeds/workoutSeed.js')
const User = require('../models/users.js')


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

// random workout (workout of the day) Route
router.get('/WOD', async (req, res) => {
  try {
    const randomWorkouts = await Workout.aggregate([{ $sample: { size: 1 } }]) // fetch one workout randomly
    // if (randomWorkouts.length) {
      res.render('WOD.ejs', { workout: randomWorkouts[0] })
    // } else {
    //   res.status(404).send('No workouts found')
    // }
  } catch (err) {
    console.error('Failed to fetch a random workout:', err)
    res.status(500).send('Error fetching a random workout')
  }
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

// new route - renders new form
router.get('/new', (req, res) => {
  res.render('newWOD.ejs')
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

// seed route - adds workout data
router.get('/seed', async (req, res) => {
  await Workout.create(workoutSeed)
  res.redirect('/workouts')
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

    if (!user) {
      res.status(404).send({ error: 'User not found' }) // send error if user not found
      return
    }
    console.log("Received isFavorite: ", req.body.isFavorite)

    const isFavorite = req.body.isFavorite
    if (isFavorite) {
      if (!user.savedWorkouts.includes(workoutId)) {
        user.savedWorkouts.push(workoutId) // add to favorites if it has not been added already 
      }
    } else {
      const index = user.savedWorkouts.indexOf(workoutId)
      if (index !== -1) {
        user.savedWorkouts.splice(index, 1) // remove from favorites 
      }
    }
    await user.save() // save users favotites changes to db
    res.send({ message: 'Favorite status updated', isFavorite })
  } catch (error) {
    console.error('Error updating favorite status:', error)
    res.status(500).send({ error: 'Internal server error' })
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
    const isFavorite = user.savedWorkouts.includes(workoutId) // check if workout is favorited 
    res.send({ isFavorite }) // return fav status
  } catch (error) {
    console.error('Error fetching favorite status:', error)
    res.status(500).send({ error: 'Internal server error' })
  }
})


module.exports = router