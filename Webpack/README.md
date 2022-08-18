# Webpack笔记

## 基本使用

### 初始化package.json
    1、npm init -y
    注意：package.json中的name不能为webpack，否则下一步会报错

### 下载依赖
    1、npm i webpack webpack-cli -D

### 启用webpack
    1、npx webpack 路径 --mode=development  开发模式
    2、npx webpack 路径 --mode=production   生产模式（可以压缩js代码）

## 基本配置
    在根目录创建一个webpack.config.js文件（文件名与路径固定）

### 5大核心概念
    1、entry（入口）
        提示webpack从哪开始打包
    2、output（输出）
        提示webpack打包完的文件输出到哪个目录
    3、loader（加载器）
        webpack本身只能处理js、json，其他资源需要借助loader，webpack才能解析
    4、plugins（插件）
        扩展webpack的功能
    5、mode（模式）
        开发模式：development
        生产模式：production

### 处理js资源
    webpack只能处理es6模块化，es6+其他语法处理不了，需要借助babel
    1、安装
        npm install -D babel-loader @babel/core @babel/preset-env
    2、将插件添加到 webpack 配置中

#### Eslint
    用来检测js和jsx的语法的工具
        .eslintrc.js配置文件
        .eslintignore配置vscode插件Eslint不需要检查的文件
    1、安装
        npm install eslint-webpack-plugin eslint --save-dev
    2、将插件添加到 webpack 配置中
        const ESLintPlugin = require('eslint-webpack-plugin');

        module.exports = {
            // ...
            plugins: [new ESLintPlugin(options)],
            // ...
        };

#### Babel
    用于将es6语法转换为向后兼容的js语法（如es5）
    1、添加配置到加载器
        {
            test: /\.js$/,
            exclude: /node_modules/, // 排除node_modules文件（不处理node_modules文件）
            loader: 'babel-loader',
        }

### 处理其他资源
    去官网看https://www.webpackjs.com/loaders/sass-loader/#%E5%AE%89%E8%A3%85

### 搭建开发服务器（修改代码自动化生成新网页）
    1、安装
    npm i webpack-dev-server -D
    2、添加到webpack配置
        devServer: {
            host: "localhost",
            port: 3000,
            open: true,
        },
    3、运行
        npx webpack serve

## 生产模式的环境配置
    1、创建config文件夹，将webpack.config.js复制两份放入其中，分别改名为webpack.dev.js（开发模式运行文件）和
    webpack.prod.js（生产模式运行文件）
    2、将两个文件中的绝对路径PATH.resolve(__dirname, 'dist')改为PATH.resolve(__dirname, '../dist')
    3、修改package.json文件中的script模块为
        "scripts": {
            "start": "npm run dev",
            "dev": "webpack server --config ./config/webpack.dev.js",
            "build": "webpack --config ./config/webpack.prod.js"
        },
    4、运行开发环境指令：npm run dev 或 npm start
       运行生产环境打包：npm run build

### 提取css成单独文件
    style标签会造成闪屏现象，影响用户体验，需用link标签引入css样式可杜绝
    1、安装包
        npm i mini-css-extract-plugin -D
    2、将插件引入webpack配置文件
        const MiniCssExtractPlugin = require("mini-css-extract-plugin");
        module.exports = {
            ...
            plugins: [new MiniCssExtractPlugin()],
            ...
        };
    3、使用
        将css加载器use模块的style.loader改为MiniCssExtractPlugin.loader

### css兼容性处理
    1、下载包
         npm i postcss-loader postcss postcss-preset-env -D
    2、添加到webpack配置文件中，要在css-loader后面sass-loader前面
        {
            test: /\.s[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader, 
                "css-loader",
                {
                    loader: "postcss-loader",
                    Options: {
                        postcssOptions: {
                            'plugins': [
                                "postcss-preset-env", // 能解决大部分兼容问题
                            ]
                        }
                    }
                }, 
                "sass-loader"
            ]
        },
    3、在package.json中添加配置
        "browserslist": [
            "> 1%",
            "last 2 versions"
        ],
