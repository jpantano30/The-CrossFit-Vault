const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema =  new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  // profileImage: { type: String, default: '/path/to/default/silhouette/image.jpg' }, // Default silhouette image
  savedWorkouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }],
  favoritedWorkouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }],
})

const User = mongoose.model('User', UserSchema)

module.exports = User