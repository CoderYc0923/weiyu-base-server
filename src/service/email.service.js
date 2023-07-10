
const Email = require('../model/email.model')

class EmailService {
    async createEmail(send_email, audio_url, send_html, send_time) {
        // 插入数据
        const res = await Email.create({
            send_email,
            audio_url,
            send_html,
            send_time
        })
        return res.dataValues
    }
}
module.exports = new EmailService()
