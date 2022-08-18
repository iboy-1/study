// 加载自定义模块
const TIME = require('./格式化时间模块')
// 加载第三方模块
const moment = require('moment')

console.log(moment().format("YYYY-MM-DD HH:mm:ss"))

const time = new Date()
console.log(TIME.dateTime(time))

const myPackage = require("./my_package_test")

console.log("my_package", myPackage.dateTime(time))

const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '../内置模块/http/index.html'), "utf-8", (err, dataStr) => {
    if (err) {
        console.log('读取文件错误！');
    } else {
        let escapeHTML = myPackage.escape(dataStr)
        console.log(escapeHTML);
        let reducHTML = myPackage.reduction(escapeHTML)
        console.log(reducHTML);
    }
})
