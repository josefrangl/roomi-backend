'use strict';

const bcrypt = require('bcrypt');

const Sequelize = require('sequelize');
const sequelize = require('../actual_db');

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

exports.createUser = async ctx => {
  try {
    const data = ctx.request.body;
    data.hashedPassword = await bcrypt.hash(data.password, 10);
    const userCreated = await User.create({
      email: data.email,
      password: data.hashedPassword,
      country: data.country,
      city: data.city,
      phone_number: data.phone_number,
      fb_id: '',
      shadow_user: false,
      profile_pic: ''
    });
    console.log('new user: ', userCreated);
    return userCreated;
  } catch (e) {
    console.log('error creating user: ', e);
  } 
}







