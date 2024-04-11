const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  category: { type: String, required: true },
  duration: String,
  date: Date,
  score: String, 
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  isFavorite: Boolean
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout