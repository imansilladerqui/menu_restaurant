/* global test, expect */
const restaurant = require('./restaurantController.js')

test('sorting by distance', () => {
  const input = {
    query: {
      longitude: '41.444792',
      latitude: '2.2441953'
    }
  }

  const res = {
    send: function () { },
    json: function (err) {
      console.log('\n : ' + err)
    }
  }

  const output = [
    {
      id: 4,
      name: 'Baires',
      image: 'http://localhost:3000/assets/images/baires.webp',
      timeOpen: '12',
      timeClose: '24',
      longitude: '41.4486099',
      latitude: '2.2368055'
    },
    {
      id: 1,
      name: 'Tortuga Restaurante',
      image: 'http://localhost:3000/assets/images/tortuga.webp',
      timeOpen: '19',
      timeClose: '24',
      longitude: '41.3924472',
      latitude: '2.1720015'
    },
    {
      id: 2,
      name: 'El Racó de les Brases',
      image: 'http://localhost:3000/assets/images/raco.webp',
      timeOpen: '20.30',
      timeClose: '23',
      longitude: '41.3700316',
      latitude: '2.1215737'
    },
    {
      id: 3,
      name: 'La Perla Restaurant',
      image: 'http://localhost:3000/assets/images/laperla.jpg',
      timeOpen: '13',
      timeClose: '24',
      longitude: '41.4681113',
      latitude: '2.0794293'
    }
  ]

  const fecha = new Date()
  const horaActual = fecha.getHours()

  output.forEach((restaurant, index) => {
    output[index].isOpen = horaActual >= restaurant.timeOpen && horaActual < restaurant.timeClose
  })

  expect(restaurant.restaurantIndex(input, res)).toEqual(output)
})

test('filtering by query', () => {
  const input = {
    query: {
      query: 'drinks'
    },
    params: {
      id: 1
    }
  }

  const res = {
    send: function () { },
    json: function (err) {
      console.log('\n : ' + err)
    }
  }

  const output = [
    {
      name: 'Coca Cola 0,33L',
      description: '',
      image: 'https://drinkhomemallorca.com/wp-content/uploads/2019/07/coca-cola-lata-33cl-caja-24unid.jpg',
      price: '2,2'
    },
    {
      name: 'Agua Vichy Catalan 0,5L',
      description: '',
      image: 'https://latiendavichy.com/830-large_default/vichy-catalan-pet-05l-6-ud.jpg',
      price: '2,8'
    },
    {
      name: 'Sprite 0,33L',
      description: '',
      image: 'https://i0.wp.com/www.pollofritopinky.com/wp-content/uploads/2015/05/sprite-33.jpg?fit=356%2C356&ssl=1',
      price: '3'
    },
    {
      name: 'Caña',
      description: '',
      image: 'https://hostalpuertobeach.es/wp-content/uploads/2019/03/ca%C3%B1a.jpg',
      price: '3'
    }
  ]

  expect(restaurant.restaurantMenu(input, res)).toEqual(output)
})
