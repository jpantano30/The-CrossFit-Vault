const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  category: { type: String, required: true },
  duration: String,
  date: Date,
  userScores: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, score: String, date: Date}], 
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  isFavorite: Boolean,
  random: { type: Number, default: Math.random() }
})

workoutSchema.index({ random: 1 })

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout