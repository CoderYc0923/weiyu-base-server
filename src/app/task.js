const sendEmail = require('../controller/send.controller')
const schedule = require("node-schedule");
const { getAllEmail } = require('../service/email.service')


const task = () => {
    schedule.scheduleJob('* * * * * *', () => {
        sendEmail();
    })
}

module.exports = task