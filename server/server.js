const express = require('express')
const RestaurantsRoutes = require('./routes/RestaurantsRoutes')
const RestaurantRoutes = require('./routes/RestaurantRoutes')
const port = 5000

// express app
const app = express()

// routes
app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.use('/restaurants', RestaurantsRoutes)
app.use('/restaurant', RestaurantRoutes)

app.listen(port, () => console.log(`listening on port ${port}!`))
