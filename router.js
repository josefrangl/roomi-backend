'use strict';

const Router = require('koa-router');
const router = new Router();

const test = require('./controllers/test');

let _404 = 'The requested URL was not found on this server.';

router.get('/test', test.test);
router.get('/*', () => {
  this.body = _404;
  this.status = 404;
});

module.exports = router;