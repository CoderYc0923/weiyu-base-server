一.项目的初始化

1.npm 初始化
  npm init -y
  生成packag.json文件：
  记录项目的依赖

2.git初始化
  git init 
  生成.git隐藏文件夹，git的本地仓库

3.创建ReadMe.md

二.搭建项目
1.安装koa框架
  npm install koa

2.编写最基本的app
  创建src/main.js
    const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hello wor22ld'
})

app.listen(3000, () => {
  console.log('server is running on http://localhost:3000')
})

3.测试
  在终端，使用 node src/main.js

三.项目的基本优化
1.自动重启服务
  安装 nodemon 工具
  执行npm run dev
2.读取配置文件
  安装 dotenv,读取根目录的.env文件，将配置写process.env中

四.添加路由
1.安装koa-router
  导入包
  实例化对象
  编写路由
  注册中间件
2.编写路由
  创建src/router目录，创建文件
3.改写main.js

五.目录结构优化
  1.将http服务和app业务拆分
  2.将路由和控制器拆分

六.解析Body
1.安装koa-body

七.数据库操作
sequelize ORM数据库工具
ORM:对象关系映射
安装 sequelize mysql2

八.创建User模型 

九.添加用户入库

十.错误处理

十一.拆分中间件

十二. 加密








