// 引入fs模块
const fs = require('fs')

// fs.readFile("./test.txt", "utf-8", (err, datastr) => {
//     new Promise((resolve, reject) => {
//         if (err) {
//             reject("读取文件错误！")
//         } else {
//             resolve(datastr)
//         }
//     }).then(res => {
//         console.log(res)
//     }).catch(fail => {
//         console.log(fail)
//     })
// })

fs.writeFile("./test.txt", "333333", "utf-8", (err) => {
    if (err) {
        console.log("文件写入失败")
    }
    console.log("文件写入成功")
})




