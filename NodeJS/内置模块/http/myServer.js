// 引入http模块
const http = require('http')

// 引入fs模块
const fs = require('fs')

// 引入path模块
const path = require('path')

// 创建web服务器实例
const myServer = http.createServer()

// 为web服务器绑定request事件，监听浏览器的请求
myServer.on("request", (req, res) => {// req：请求对象 res：响应对象
    // 处理中文乱码
    // res.setHeader("Content-Type","text/plain; charset=UTF-8")

    // 获取浏览器请求路径并拼接路径
    let url = path.join(__dirname, req.url)
    
    // 读取资源文件
    fs.readFile(url, "utf8", (err,dataStr) => {
        if (err) {
            // 响应数据
            res.end("请求路径错误！")
        } else {
            // 响应数据
            res.end(dataStr)
        }
    })
})

// 启动服务器
myServer.listen(8054, () => {
    console.log("服务器启动成功！");
})