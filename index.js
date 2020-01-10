'use strict';

const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

const router = require('./router');

app.use(bodyParser());
app.use(router.routes());

const PORT = process.env.PORT || 3000;

app.listen(PORT);

console.log(`🤖: Server listening on port ${PORT}`);