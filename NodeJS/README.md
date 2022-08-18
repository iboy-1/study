# 笔记

## node.js内置模块
    1、fs文件系统模块
    2、path路径模块
    3、http模块

### fs文件系统模块
    1、文件读取：fs.readFile(路径, 编码, 回调函数)
    2、文件写入：fs.writeFile(路径, 内容, 编码, 回调函数)
    3、读取文件路径：__dirname

### path路径模块
    1、拼接路径：path.join(...args) 
        path.join("/a", "/b/c", "../", "./d", "/e")  结果：\a\b\d\e
    2、获取路径中的文件名：path.basename(路径, 扩展名) 
    2、获取路径中的文件扩展名：path.extname(路径) 

### http模块

#### 创建一个简单的web服务器
    1、引入http模块
        const http = require('http')
    2、创建web服务器实例
        const myServer = http.createServer()
    3、为web服务器绑定request事件，监听浏览器的请求
        myServer.on("request", (req,res) => {
            console.log("浏览器发送请求了！");
        })
    4、启动服务器
        myServer.listen(8054, () => {
            console.log("服务器启动成功！");
        })

## 模块化
    1、内置模块（如fs、path、http等安装node.js时自带的模块）
    2、自定义模块（自己创建的js文件）
    3、第三方模块（由第三方开发，需要下载的模块）

### require加载
    语法：const myModul = require('路径可省略后缀名') 
    require加载模块后会执行该模块的代码

### npm包管理

    项目包：
        开发依赖包：npm i 包的名称 -D （安装在package.json中的devDependencies节点）
        核心依赖包：npm i 包的名称  （安装在package.json中的dependencies节点）
    全局包：
        npm i 包名 -g  （安装在C:\Users\iboy\AppData\Roaming\npm\node_modules）
        npm uninstall 包名 -g  （卸载全局包）
        

    1、安装包的命令
        npm install 包的名称（完整写法）
        npm i 包的名称 （简写）
        npm i 包的名称@版本号（安装指定版本的包）
        npm uninstall 包的名称（卸载包，且会将包名从package.json中移除）

    2、包管理配置文件package.json
        快速创建package.json：npm init -y

        devDependencies节点：存储只在开发阶段用得到但在项目上线之后用不到的包
            npm i 包的名称 -D（简写）
            npm install 包的名称 --save-dev（完整写法）
        dependencies节点：存储在开发阶和项目上线之后都用得到的包

        注意事项：
            项目名称不能包含中文或空格