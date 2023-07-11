const nodemailer = require('nodemailer');
const template = require('art-template');
const path = require("path");

const { getNeedSendEmails, deleteSendedEmail } = require('../service/email.service')
const { SEND_EMAIL, SEND_EMAIL_TEMP, SEND_PASS, SEND_TITLE } = require('../config/config.default')

const renderTemplate = (audio_url) => {
    return new Promise((resolve, reject) => {
        const html = template(path.join(__dirname, '../emailWeb/template.html'), {
            audio_url
        })
        resolve(html)
    })
}

const sendEmail = async () => {
    const res = await getNeedSendEmails();
    if (res?.length) {
        console.log('STEP2: 当前存在待发送邮件');
        for (let i in res) {
            const { send_email, audio_url, id } = res[i];
            const html = await renderTemplate(audio_url);
            let transporter = nodemailer.createTransport({
                service: 'qq',
                auth: {
                    user: SEND_EMAIL,
                    pass: SEND_PASS
                }
            })
            let mailOptions = {
                from: SEND_EMAIL_TEMP,
                to: send_email,
                subject: SEND_TITLE,
                html,
            }
            transporter.sendMail(mailOptions, async function (err, info) {
                if (err) {
                    console.log('STEP3: 发送失败:', err);
                     console.log('================');
                    return;
                }
                console.log('STEP3: 发送成功');
                await deleteSendedEmail(id)
                console.log('STEP4: 删除已发送邮件成功');
                console.log('================');
            })
        }
    } else {
        console.log('STEP2: 当前不存在待发送邮件');
        console.log('================');
    }
}

module.exports = sendEmail