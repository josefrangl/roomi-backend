'use strict';

// import model
const model = require('../models/user');

exports.createUser = async ctx => {
  try {
    console.log('controler', ctx.request.body);
    ctx.body = await model.createUser();
    ctx.status = 201;
  } catch (e) {
    console.log('error creating user: ', e);
    ctx.status = 400;
  }
};