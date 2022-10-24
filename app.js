const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const onerror = require('koa-onerror')
//并不支持form-data这种数据格式
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const RootRouter = require('./routes/index')

//在app中注册模板
app.use(views(__dirname + '/views', {
	extension: 'ejs',
}))

// 在app中注册根路由
app.use(RootRouter.routes(), RootRouter.allowedMethods())

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

//log 
app.use(logger())

//static path
app.use(require('koa-static')(__dirname + '/public'))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
