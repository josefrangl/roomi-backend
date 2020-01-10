'use strict';

const db = require('../models/test').test();

exports.test = ctx => {
  try {
    return db;
  } catch (e) {
    console.log('error in model: ', e);
  }
}