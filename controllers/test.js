'use strict';

// import model

exports.test = async ctx => {
  try {
    ctx.body = 'server works';
    ctx.status = 200;
  } catch (e) {
    console.log('error', e);
  }
};