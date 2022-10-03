const express = require('express')
const restaurantController = require('../controllers/restaurantController')

const router = express.Router()

router.get('/', (req, res) => new Promise((resolve, reject) => {
  resolve(restaurantController.restaurantIndex(req))
})
  .then((response) => {
    res.json({ restaurants: response })
  }))
module.exports = router
