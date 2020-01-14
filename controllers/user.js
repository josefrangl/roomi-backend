'use strict';

// import model


const bcrypt = require('bcrypt');

const db = require('../models/index');

const User = require('../models/user');

exports.createUser = async ctx => {
  const user = ctx.request.body;
  try {
    user.hashedPassword = await bcrypt.hash(user.password, 10);
    ctx.body = await User.create({
      email: user.email,
      password: user.hashedPassword,
      country: user.country,
      city: user.city,
      phone_number: user.phone_number,
      shadow_user: false
    });
    ctx.status = 201;
  } catch (e) {
    console.log('error creating user: ', e);
    ctx.status = 400;
  }
};