
const Email = require('../model/use.model')

class EmailService {
  async createUser (user_name, password) {
    // 插入数据
    const res = await Email.create({
      user_name,
      password
    })
    return res.dataValues
  }
  async getUserInfo ({ id, user_name, password, is_admin }) {
    const whereOpt = {}
    id && Object.assign(whereOpt, { id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })
    const res = await Email.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt
    })
    return res ? res.dataValues : null
  }
}
module.exports = new EmailService()
