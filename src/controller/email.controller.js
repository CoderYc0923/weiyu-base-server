const { createEmail, getNeedSendEmails } = require('../service/email.service')
const { emailFormateError } = require("../consitant/err.type")
class EmailController {
  async save(ctx, next) {
    const { send_email, audio_url, send_html, send_time } = ctx.request.body 
    try {
      const res = await createEmail(send_email, audio_url, send_html, send_time)
      // 返回结果
      const responseObj = {
        code: 0,
        message: '保存成功',
        result: res
      }
      ctx.body = JSON.stringify(responseObj)

    } catch (error) {
      console.log(err)
      ctx.app.emit('error', emailFormateError, ctx)
    }
  }

  async test(ctx, next) {
    const { time } = ctx.request.query
    console.log('time',time);
    try {
      const res = await getNeedSendEmails()
      // 返回结果
      const responseObj = {
        code: 0,
        message: '请求成功',
        result: res
      }
      ctx.body = JSON.stringify(responseObj)
    } catch (error) {
      console.log(err)
      ctx.app.emit('error', emailFormateError, ctx)
    }
  }
}
module.exports = new EmailController()