
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
    async getNeedSendEmails(queryTime) {
        const time = Date.parse(new Date()) / 1000
        const res = await Email.findAll({
            raw: true,
            where: {
                send_time: queryTime || time
            }
        })
        console.log('STEP1: 当前时间：', time, '待发送邮件:', res);
        return res
    }
    async deleteSendedEmail(emailId) {
        const res = await Email.destroy({
            where: {
                id: emailId
            }
        })
        return res
    }
}
module.exports = new EmailService()
