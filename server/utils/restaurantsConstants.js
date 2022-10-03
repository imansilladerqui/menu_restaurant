const Restaurants = [
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
  },
  {
    id: 4,
    name: 'Baires',
    image: 'http://localhost:3000/assets/images/baires.webp',
    timeOpen: '12',
    timeClose: '24',
    longitude: '41.4486099',
    latitude: '2.2368055'
  }
]

const RestaurantsMenu = [
  {
    // This menu is from https://www.thefork.es/restaurante/tortuga-r719761/menu
    id: 1,
    name: 'Tortuga Restaurante',
    restaurantId: 1,
    catalog: {
      drinks: [
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
      ],
      tapas: [
        {
          name: 'Surtido de Croquetas (3un)',
          description: 'butifarra, mayo de yuzu, ciboulette y limón quemado',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/996e059e-1dd2-484a-be9b-00e308b4dd03/e77f8807-123d-4c2c-b077-b893d4ad3482.jpg',
          price: '5,9'
        },
        {
          name: 'Entrecot (170g)',
          description: 'Entrecot, patata acordeón, gremolata, polvo de remolacha y rúcula',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/996e059e-1dd2-484a-be9b-00e308b4dd03/f1171e2f-f64c-44cb-bbd3-88d7296f3d55.jpg',
          price: '16,9'
        },
        {
          name: 'Tapa de Higos',
          description: 'Higos, almendras tostadas, rúcula y miel de flores',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/996e059e-1dd2-484a-be9b-00e308b4dd03/0946434f-52b9-4319-aaac-101e07a7fe7c.jpg',
          price: '6,9'
        },
        {
          name: 'Salmón Teriyaki',
          description: 'salmón, shiitake en mantequilla avellanada, jengibre encurtido, mayonesa de wasabi servido con rúcula',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/996e059e-1dd2-484a-be9b-00e308b4dd03/63d4f6f3-6d9e-429a-8234-1839ea80ca94.jpg',
          price: '13,9'
        }
      ],
      snacks: [
        {
          name: 'Focaccia de la Casa',
          description: '',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/996e059e-1dd2-484a-be9b-00e308b4dd03/4cb5299c-1344-4a05-bfd8-08d373fe9a87.jpg',
          price: '4,9'
        },
        {
          name: 'Pan con Tomate',
          description: '',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/996e059e-1dd2-484a-be9b-00e308b4dd03/6093c74f-1b5c-4e52-9465-9d6a74d504b0.jpg',
          price: '3,5'
        }
      ],
      postres: [
        {
          name: 'Frenesí de Fresa',
          description: 'bizcocho de vainilla, nata montada de vainilla, coulis de fresa, sorbete de fresa, menta y polvo de fresa',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/996e059e-1dd2-484a-be9b-00e308b4dd03/6b6e04a9-aca8-4bc1-9737-eace882b6daa.jpg',
          price: '7,9'
        },
        {
          name: 'Dulces Sueños',
          description: 'Bizcocho de malta, mousse de chocolate callebaut 70%, caramelo de miso, helado de avellana, tuile de macadamia y hoja de oro',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/996e059e-1dd2-484a-be9b-00e308b4dd03/bf5b2dea-9f44-48ec-9fed-3069f91fb1a9.jpg',
          price: '7,9'
        }
      ]
    }
  },
  {
    // This menu is from https://www.thefork.es/restaurante/baires-r427567/menu
    id: 2,
    name: 'El Racó de les Brases',
    restaurantId: 2,
    catalog: {
      Paella: [
        {
          name: 'Paella mixta',
          description: '',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/f_auto,q_auto,w_800,c_limit/customer/78c70ac7-b649-4b11-a10c-6194702755b5/0be8f50b-81ae-4a00-8778-8db5d460db7c.jpg',
          price: '15'
        }
      ]
    }
  },
  {
    // This menu is from https://www.thefork.es/restaurante/baires-r427567/menu
    id: 3,
    name: 'Baires',
    restaurantId: 4,
    catalog: {
      drinks: [
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
      ],
      Entrantes: [
        {
          name: 'Empanadas Argentinas',
          description: '',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/customer/4e9ccf3f-e4ec-40a5-92b2-935980981774/daf5f1ba-544e-41ff-a02f-b5108ae84211.jpg',
          price: '3,5'
        },
        {
          name: 'Patatas Baires',
          description: 'Patatas fritas al corte casero, con queso fundido y bacon',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/customer/4e9ccf3f-e4ec-40a5-92b2-935980981774/f51d9d39-8d96-4b1c-b9e1-2286321c572c.jpg',
          price: '8,5'
        },
        {
          name: 'Parrillada de verduras de temporada',
          description: '',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/4e9ccf3f-e4ec-40a5-92b2-935980981774/5c5c9617-31ba-4ca0-95a6-dc9aebc8d039.jpg',
          price: '15,5'
        },
        {
          name: 'Queso Provolone',
          description: '',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/4e9ccf3f-e4ec-40a5-92b2-935980981774/ed5e850a-6c56-47eb-9c7c-3b12dde438d4.jpg',
          price: '8,5'
        }
      ],
      pastas: [
        {
          name: 'Sorrentinos',
          description: 'Pasta redonda rellena de ricotta, jamón dulce, mozzarella',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/4e9ccf3f-e4ec-40a5-92b2-935980981774/31bf19be-efc6-4330-9f7d-95b17da49523.jpg',
          price: '14,9'
        }
      ],
      carnes: [
        {
          name: 'Entraña 300gr',
          description: 'Corte argentino de ternera sin hueso',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/4e9ccf3f-e4ec-40a5-92b2-935980981774/7fd93fe7-8464-4bd6-a7e0-d76a407bd085.jpg',
          price: '16,9'
        },
        {
          name: 'Entrecot de Lomo alto argentino 400 gr sin hueso',
          description: '',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/customer/4e9ccf3f-e4ec-40a5-92b2-935980981774/561de807-8d0e-4f79-9829-777f3ac5ced4.jpg',
          price: '24,5'
        },
        {
          name: 'Chuletón de vaca madurada 750 gr.',
          description: '',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/4e9ccf3f-e4ec-40a5-92b2-935980981774/be68c723-0143-48d9-ae20-b4dda600f295.jpg',
          price: '39,5'
        }
      ],
      postres: [
        {
          name: 'Panqueque casero de dulce de leche',
          description: '',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/customer/4e9ccf3f-e4ec-40a5-92b2-935980981774/991ae6ac-e7fe-4773-8afb-a7f2eaeaae08.jpg',
          price: '5,9'
        }
      ]
    }
  },
  {
    // This menu is from https://www.thefork.es/restaurante/baires-r427567/menu
    id: 4,
    name: 'La Perla Restaurant',
    restaurantId: 3,
    catalog: {
      drinks: [
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
      ],
      braceria: [
        {
          name: 'Salsiccia Di Carne 1 Porzione',
          description: '',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/febc13d4-0f98-4494-9265-dac781871ba0/fbb0714a-6968-4bf3-9015-87e095b9e1a3.jpg',
          price: '4'
        }
      ],
      primi: [
        {
          name: 'Sagne ( Fatte a Mano) e Fagioli',
          description: 'Pasta All`Uovo, Pomodoro, Fagioli Borlotti.',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/febc13d4-0f98-4494-9265-dac781871ba0/10d1b542-ff42-409a-b3cc-9d032b7ff384.jpg',
          price: '6'
        }
      ],
      fritteria: [
        {
          name: 'Pallotte Cacio e Ove (4 PZ)',
          description: '',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/febc13d4-0f98-4494-9265-dac781871ba0/803e4617-c6f9-4c91-b865-7135542ff54e.jpg',
          price: '5'
        }
      ],
      postres: [
        {
          name: 'Mono Stellata',
          description: '',
          image: 'https://res.cloudinary.com/tf-lab/image/upload/w_800,c_fill,q_auto,f_auto/restaurant/febc13d4-0f98-4494-9265-dac781871ba0/2784dc84-64f9-4a16-bf8c-4bc7c1ffc739.jpg',
          price: '5'
        }
      ]
    }
  }
]

module.exports = { Restaurants, RestaurantsMenu }
