const Router = require('koa-router')
const { save } = require('../controller/email.controller')
const { emailValidator, verifySave } = require('../middleware/email.middleware')
const router = new Router({
  prefix: '/email'
})
/**
 * @swagger
 * /email/save:
 *   post: 
 *     description: 保存待发送邮件信息 
 *     summary: "保存邮件" 
 *     tags: [邮件模块] 
 *     parameters: 
 *       - name: send_email
 *         description: 邮箱账号
 *         required: true
 *         in: query
 *         type: string
 *       - name: audio_url
 *         description: 音频地址
 *         required: true
 *         in: query
 *         type: string
 *       - name: send_html
 *         description: 邮件内容
 *         required: false
 *         in: query
 *         type: string
 *       - name: send_time
 *         description: 发送时间
 *         required: true
 *         in: query
 *         type: string
 *     produces: 
 *       - application/json 
 *     responses: 
 *       200:
 *         description: 获取数据列表 
 * */
router.post("/save", save)


module.exports = router