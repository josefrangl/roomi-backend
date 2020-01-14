'use strict';

// import model
const model = require('../models/user');

exports.createUser = async ctx => {
  try {
    ctx.body = await model.createUser();
    ctx.status = 201;
  } catch (e) {
    console.log('error creating user: ', e);
  }
};