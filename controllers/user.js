'use strict';

// import model


const bcrypt = require('bcrypt');

const db = require('../models/index');

exports.createUser = async ctx => {
  const user = ctx.request.body;
  console.log('request post create user:', user);
  try {
    user.hashedPassword = await bcrypt.hash(user.password, 10);
    ctx.body = await db.User.create({
      email: user.email,
      password: user.hashedPassword,
      firstName: user.firstName,
      lastName: user.lastName,
      phone_number: user.phone_number,
      shadow_user: false
    });
    ctx.status = 201;
  } catch (e) {
    console.log('error creating user: ', e);
    ctx.status = 400;
  }
};