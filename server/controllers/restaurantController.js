const { Restaurants, RestaurantsMenu } = require('../utils/restaurantsConstants')

const restaurantIndex = (req) => {
  const fecha = new Date()
  const horaActual = fecha.getHours()

  if (req.query.longitude && req.query.latitude) {
    const distance = (coor1, coor2) => {
      const longitude = coor2.longitude - coor1.longitude
      const latitude = coor2.latitude - coor1.latitude
      return Math.sqrt((longitude * longitude) + (latitude * latitude))
    }
    const sortByDistance = (coordinates, point) => {
      const sorter = (a, b) => distance(a, point) - distance(b, point)
      coordinates.sort(sorter)
    }

    sortByDistance(Restaurants, { longitude: req.query.longitude, latitude: req.query.latitude })
  } else {
    Restaurants.sort((a, b) => {
      return parseFloat(a.id) - parseFloat(b.id)
    })
  }

  Restaurants.forEach((restaurant, index) => {
    Restaurants[index].isOpen = horaActual >= restaurant.timeOpen && horaActual < restaurant.timeClose
  })

  return Restaurants
}

const restaurantMenu = (req) => {
  const data = {
    catalog: {}
  }
  const filtered = RestaurantsMenu.find((rest) => rest.restaurantId === parseInt(req.params.id))

  if (req.query.query) {
    if (Object.keys(filtered.catalog).includes(req.query.query)) {
      data.catalog = {
        [req.query.query]: filtered.catalog[req.query.query]
      }
      return data
    } else {
      Object.keys(filtered.catalog).forEach((category) => {
        filtered.catalog[category].forEach(item => {
          if (item.name.includes(req.query.query)) {
            data.catalog = {
              [category]: []
            }
            return data.catalog[category].push(item)
          }
          return data
        })
      })
      return data
    }
  } else {
    return filtered
  }
}

module.exports = {
  restaurantIndex,
  restaurantMenu
}
