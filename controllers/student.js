const express = require('express')
const router = express.Router()
const Student = require('..//models/user')
const Class = require('../models/class')

router.get('/', async (req, res) => {
  try {
    const populatedClass = await Class.find({})
    res.render('student/index.ejs', { Class: populatedClass })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
})

router.get('/new', async (req, res) => {
  try {
    const populatedClass = await Class.find({})
    res.render('student/new.ejs', { Class: populatedClass })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
})

router.post('/:populatedClass/join-by/:userId', async (req, res) => {
  try {
    await Class.findByIdAndUpdate(req.params.populatedClass, {
      $push: { student: req.params.userId }
    })
    res.redirect('/student')
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
})

module.exports = router
