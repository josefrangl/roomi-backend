'use strict';

const db = require('../models/test').test();

exports.test = ctx => {
  try {
    ctx.body = db;
    ctx.status = 200;
  } catch (e) {
    console.log('error in model: ', e);
  }
}