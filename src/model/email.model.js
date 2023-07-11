const { DataTypes } = require('sequelize');
const seq = require('../db/seq')


// 创建模型
const Email = seq.define("email_save", {
  // id会被sequlize自动创建，管理
  send_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "发送的邮箱"
  },
  audio_url: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "音频地址"
  },
  send_html: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "邮件内容"
  },
  send_time: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "发送时间"
  }
})

// 模型同步
Email.sync()
module.exports = Email
