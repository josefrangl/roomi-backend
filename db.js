'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect:  'postgres',
  protocol: 'postgres',
  logging:  true //false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

exports.getData = function () {
  return tempData;
}

const tempData = [
  {
    _id: 1,
    price: '400€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 2,
    price: '500€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: 'until july',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 3,
    price: '600€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 4,
    price: '700€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 5,
    price: '800€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 6,
    price: '900€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 7,
    price: '1000€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 8,
    price: '1100€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  }
];