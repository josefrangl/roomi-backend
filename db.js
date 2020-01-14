'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
dialect:  'postgres',
protocol: 'postgres',
logging:  (msg) => console.log('postgres: ', msg)
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const Model = Sequelize.Model;
class User extends Model {}
User.init({
  /* id primary key auto generated by sequelize */
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true
  },
  country: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fb_id: {
    type: Sequelize.STRING,
    allowNull: true
  },
  shadow_user: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  profile_pic: {
    type: Sequelize.STRING,
    allowNull: true,
  }
}, {
  sequelize,
  modelName: 'user'
});

sequelize.sync();

/*User.sync()
  .then(() => {

  })
  .catch((e) => console.log('error in syncing user: ', e));

exports.getData = function () {
   return tempData;
}
*/
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
