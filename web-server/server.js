// libs
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// setup teh router
const app = new Koa();
const router = new Router();
const redirect_app = new Koa();
const redirect_router = new Router();

// routes
const V1_API_ROUTES = require('./api/v1');

const { NODE_ENV } = process.env;
const PORT = process.env.PORT || 3000;
const SERVER_HOST = process.env.SERVER_HOST || 'localhost';
const API_VERSION = process.env.API_VERSION || 'v1';
const API_ROOT = `api/${API_VERSION.toLowerCase()}`;
const APP_NAME = 'app';
const CONFIG = (NODE_ENV === 'production') ? require('../configs/development.json') : require('../configs/development.json');

console.log('PORT');
console.log('PORT');
console.log('PORT');
console.log(PORT);

console.log(`/${API_ROOT}${V1_API_ROUTES.MOVIEDB.PATHS.GET}`);
router.get(`/${API_ROOT}${V1_API_ROUTES.MOVIEDB.PATHS.GET}`, V1_API_ROUTES.MOVIEDB.GET);

router.get('/dist/:filename', async (ctx, next) => {
  ctx.response.lastModified = new Date();
  ctx.body = fs.createReadStream(__dirname + `/dist/${ctx.params.filename}`);
});

router.get('/(.*)', async (ctx, next) => {
  console.log('ctx: ', ctx.request.href);
  console.log('ctx: ', ctx.request.protocol);

  ctx.response.lastModified = new Date();
  ctx.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        
        <title>Movies For Jeff!!1</title>
        <style>
          html, body {
            margin: 0;
          }
        </style>
        <script>
          window._config_ = ${JSON.stringify(CONFIG)}
        </script>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">

      </head>
      <body>
        <div id="root"></div>
        <script src="/dist/${APP_NAME}.bundle.js"></script>
      </body>
    </html>
  `;
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(PORT);

// http.createServer(app.callback()).listen(PORT);
// https.createServer(app.callback()).listen(PORT);

// // Listen
// const httpServer = http.createServer(app.callback())
//   .listen(PORT, SERVER_HOST, listeningReporter)
// const httpsServer = https.createServer(app.callback())
//   .listen(3001, SERVER_HOST, listeningReporter)
// // A function that reports what type of server listens on which port
// function listeningReporter() {
//   const { address, port } = this.address();
//   const protocol = this.addContext ? 'https' : 'http';
//   console.log(`Listening on ${protocol}://${address}:${port}...`);
// }
