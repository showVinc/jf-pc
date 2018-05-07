const Koa = require('koa')
  , app = new Koa()
  , json = require('koa-json')
  , logger = require('koa-logger')
  , cors = require('koa2-cors')
  ,auth = require('./routes/auth.js'); // 引入auth

const router = require('koa-router')();
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());
app.use(cors());

router.use('/auth',auth.routes());
app.use(router.routes());

app.use(async (ctx,next)=>{
  let start = new Date();
  await next;
  let ms = new Date() - start;
  // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})


app.on('error',function(err,ctx){
  console.log('server error',err);
})


app.listen(3000,() => {
  console.log('Koa is listening in 3000');
});

module.exports = app;
