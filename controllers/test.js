'use strict';

// import model
const model = require('../models/test');

exports.test = async ctx => {
  try {
    ctx.body = await model.test();
    ctx.status = 200;
  } catch (e) {
    console.log('error', e);
  }
};