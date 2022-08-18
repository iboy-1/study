// 入口文件
const date = require("./src/dateTime")
const handleHTML = require("./src/handleHTML")

module.exports = {
    ...date,
    ...handleHTML
}