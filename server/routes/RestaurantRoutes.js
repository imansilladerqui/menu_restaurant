const express = require('express')
const restaurantController = require('../controllers/restaurantController')

const router = express.Router()

router.get('/:id/catalog', (req, res) => new Promise((resolve, reject) => {
  resolve(restaurantController.restaurantMenu(req))
})
  .then((response) => {
    res.json({ data: response })
  }))

module.exports = router
