const Koa = require('koa')
const { koaBody } = require('koa-body')
const errHandler = require('./errHandler')
const emailRouter = require('../router/email.route')

const { koaSwagger } = require('koa2-swagger-ui')
const swagger = require('../config/config.swagger')

const app = new Koa()

// swagger配置
app.use(swagger.routes(), swagger.allowedMethods())
app.use(koaSwagger({
    routePrefix: '/swagger',
    swaggerOptions: {
        url: '/swagger.json',
    },
}))

app.use(koaBody({multipart: true}))
app.use(emailRouter.routes(), emailRouter.allowedMethods());
// 统一错误处理
app.on('error', errHandler)

module.exports = app