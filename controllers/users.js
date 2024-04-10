const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/users.js')

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
    // req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    // console.log('after hash: ', req.body)
    res.redirect('/workouts')
  } catch (err) {
    console.log('ERROR WITH USER POST: ', err)
    res.status(500).send('Please try a different username or password.')
  }
})

// post route - login a user
router.post('/login', async (req, res) => {
  try {
      // check if the user exists in our database 
      const foundUser = await User.findOne({username: req.body.username})
      console.log('Found user:', foundUser)
      // if found 
      if(foundUser) {
          const isAMatch = bcrypt.compareSync(req.body.password, foundUser.password)
          if(isAMatch) {
              console.log('login successful')
              req.session.currentUser = foundUser
              res.redirect('/workouts')
          }
          else {
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

// deletes a user
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