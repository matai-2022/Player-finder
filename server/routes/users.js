const express = require('express')
// TODO: import checkJwt
const db = require('../db/users')

const router = express.Router()

module.exports = router

router.post('/', async (req, res) => {
  const data = req.body
  try {
    const newUser = await db.addUser(data)
    res.json(newUser)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.get('/', async (req,res) => {
  const allUsers = await db.getAllUsers()
  try {
    res.json(allUsers)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})