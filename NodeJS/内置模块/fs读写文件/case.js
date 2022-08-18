const fs = require('fs')

fs.readFile("./test.txt", "utf-8", function(err, dataStr) {
    if (err) {
        console.log("文件读取失败！")
    } else {
        let arr = dataStr.split(" ")
        arr.forEach((item, index) => {
            arr[index] = item.replace("=", ":")
        });
        let str = arr.join('\r\n')
        fs.writeFile("./test.txt", str, "utf-8", (err) => {
            if (err) {
                console.log("写入失败！");
            } else {
                console.log("写入成功！");
            }
        })
    }
})