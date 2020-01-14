'use strict';

// MOVED TO INDEX


// module.exports = (sequelize, DataTypes) => sequelize.define('User', {
//   email: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   country: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   city: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   phone_number: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   fb_id: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   shadow_user: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false,
//     defaultValue: false
//   },
//   profile_pic: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   }
// });



const db = require('./index');

const Model = db.Sequelize.Model;
class User extends Model {}
User.init({
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

User.sync();


module.exports = User;




