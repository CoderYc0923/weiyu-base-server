const { emailFormateError } = require('../consitant/err.type')
const emailValidator = async (ctx, next) => {
    const validates = { send_email, audio_url, send_time } = ctx.request.body
    // for (let validate in validates) {
    //     if (!validate) {
    //         console.error('缺少必填项', ctx.request.body)
    //         ctx.app.emit('error', emailFormateError, ctx)
    //         return;
    //     }
    // }
    await next()
}
const verifySave = async (ctx, next) => {
    await next()
}
module.exports = {
    emailValidator,
    verifySave
}