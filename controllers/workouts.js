const express = require('express')
const router = express.Router()
const Workout = require('../models/workouts.js')
const workoutSeed = require('../seeds/workoutSeed.js')

// get route - renders all workouts
// router.get('/', async (req, res) => {
//   const foundWorkouts = await Workout.find({})
//   res.render('indexWODs.ejs', { workouts: foundWorkouts })
// })

router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find({})
    const categories = [...new Set(workouts.map(workout => workout.category))]
    res.render('indexWODs.ejs', { workouts, categories })
  } catch (err) {
    console.error('Failed to fetch workouts: ', err)
    res.status(500).send('Error fetching workouts')
  }
})

router.get('/WOD', async (req, res) => {
  try {
    const randomWorkouts = await Workout.aggregate([{ $sample: { size: 1 } }])
    if (randomWorkouts.length) {
      res.render('WOD.ejs', { workout: randomWorkouts[0] })
    } else {
      res.status(404).send('No workouts found')
    }
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
  const workouts = await Workout.create(workoutSeed)
  res.redirect('/workouts')
})


// show route - shows a single workout
router.get('/:id', async (req, res) => {
  const foundWorkout = await Workout.findById(req.params.id)
  res.render('showWOD.ejs', { workout: foundWorkout })
})

// post route - create a workout
router.post('/', async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body)
    res.redirect('/workouts')
  } catch (err) {
    console.log('ERROR WITH WORKOUT POST: ', err)
    res.status(500).send(err)
  }
})

// edit route - renders edit form
router.get('/:id/edit', async (req, res) => {
  const foundWorkout = await Workout.findById(req.params.id)
  res.render('editWOD.ejs', { workout: foundWorkout })
})

// put route - edit a workout
router.put('/:id', async (req, res) => {
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.redirect('/workouts/' + updatedWorkout.id)
  } catch (err) {
    console.log('ERROR IN EDIT ROUTE (PUT): ', err)
    res.status(500).send(err)
  }
})

// delete route - delete a workout
router.delete('/:id', async (req, res) => {
  try {
    const deletedWorkout = await Workout.findByIdAndDelete(req.params.id)
    res.redirect('/workouts')
  } catch (err) {
    console.log('ERROR IN DELETE REQUEST: ', err)
    res.status(500).send(err)
  }
})

router.post('/:id/favorite', async (req, res) => {
  try {
    const { isFavorite } = req.body
    const workout = await Workout.findByIdAndUpdate(req.params.id, { isFavorite }, { new: true })
    res.json({ message: 'Favorite status updated', workout })
  } catch (error) {
    console.error('Error updating favorite status:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = router