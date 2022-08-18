const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, "/index.html"), "utf-8", (err, dataStr) => {
    if (err) {
        console.log("文件读取失败");
    } else {
        console.log(getCss(dataStr), getJs(dataStr));
        fs.writeFile(path.join(__dirname, "/style.css"), getCss(dataStr).trim(), "utf-8", (err) => {
            if (err) console.log("文件写入失败");
            console.log("文件写入成功");
        })
    }
})

function getCss(str) {
    let result = regStyle.exec(str)[0]
    return result.replace("<style>","").replace("</style>","")
}

function getJs(str) {
    let result = regScript.exec(str)[0]
    return result.replace("<script>", "").replace("</script>", "")
}