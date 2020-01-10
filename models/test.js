'use strict';

const db = require('../models/test');
const data = db.test();

exports.test = ctx => {
  try {
    return data;
  } catch (e) {
    console.log('error in model: ', e);
  }
}