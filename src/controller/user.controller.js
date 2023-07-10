const { createUser, getUserInfo } = require('../service/user.service')
const { userRegisterError } = require("../consitant/err.type")
class UserController {
  async register (ctx, next) {
    const { user_name, password } = ctx.request.body
    const res = await createUser(user_name, password)
    try {
      // 返回结果
      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: {
          id: res.id,
          user_name: res.user_name
        }
      }

    } catch (error) {
      console.log(err)
      ctx.app.emit('error', userRegisterError, ctx)

    }

  }
  async login (ctx, next) {
    const {user_name}=ctx.request.body
    ctx.body = `欢迎回来，${user_name} 用户登录成功`
  }
}
module.exports = new UserController()