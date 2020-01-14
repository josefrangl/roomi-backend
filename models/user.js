'use strict';

// MOVED TO INDEX


// module.exports = (sequelize, DataTypes) => sequelize.define('User', {
//   email: {
//     type: db.Sequelize.STRING,
//     allowNull: true
//   },
//   password: {
//     type: db.Sequelize.STRING,
//     allowNull: true
//   },
//   country: {
//     type: db.Sequelize.STRING,
//     allowNull: true
//   },
//   city: {
//     type: db.Sequelize.STRING,
//     allowNull: true
//   },
//   phone_number: {
//     type: db.Sequelize.STRING,
//     allowNull: false
//   },
//   fb_id: {
//     type: db.Sequelize.STRING,
//     allowNull: true
//   },
//   shadow_user: {
//     type: db.Sequelize.BOOLEAN,
//     allowNull: false,
//     defaultValue: false
//   },
//   profile_pic: {
//     type: db.Sequelize.STRING,
//     allowNull: true,
//   }
// });



const db = require('./index');

const Model = db.Sequelize.Model;
class User extends Model {}
User.init({
  email: {
    type: db.Sequelize.STRING,
    allowNull: true
  },
  password: {
    type: db.Sequelize.STRING,
    allowNull: true
  },
  country: {
    type: db.Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: db.Sequelize.STRING,
    allowNull: true
  },
  phone_number: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  fb_id: {
    type: db.Sequelize.STRING,
    allowNull: true
  },
  shadow_user: {
    type: db.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  profile_pic: {
    type: db.Sequelize.STRING,
    allowNull: true,
  }
}, {
  db.sequelize,
  modelName: 'user'
});

User.sync();


module.exports = User;




