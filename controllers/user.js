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

exports.loginUser = async ctx => {
  const loginData = ctx.request.body;
  try {
    const userData = await db.User.findAll({
      where: {
        email: loginData.email
      }
    });
    console.log(loginData);
    console.log(userData);
    if (userData) {
      const correctPassword = await bcrypt
        .compare(loginData.password, userData[0].User.dataValues.password);
      if (correctPassword) {
        ctx.body = loginData.email;
        ctx.status = 202;
      } else {
        ctx.body = 'Incorrect password';
        ctx.status = 401;
      }
    } else {
      ctx.body = 'User / Email not found';
      ctx.status = 404;
    }

  } catch (e) {
    console.log('error login in user: ', e);
  }

}