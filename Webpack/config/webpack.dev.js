const PATH = require("path")
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // 入口文件
    entry: './src/main.js',
    // 输出
    output: {
        path: PATH.resolve(__dirname, '../dist'),
        // 入口文件输出目录
        filename: 'static/js/index.js',
        // 自动清空上次打包的内容
        clean: true
    },
    // 加载器
    module: {
        rules: [
            // 加载器的配置
            // css加载器
            {
                test: /\.css$/,
                use: [
                    // 执行顺序从右往左（从下往上）
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            // scss/sass加载器
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            // 图片处理
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: 'asset', // asset与parser配套使用
                parser: {
                    // 小于10kb转为base64
                    // 优点：减少请求数量
                    // 缺点：体积大一点
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    }
                },
                generator: {
                    // 图片输出路径与名称
                    // [hash:10]图片名称去哈希值前十位
                    filename: "static/images/[hash][ext][query]",
                },
            },
            // 字体
            {
                test: /\.(ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/fonts/[hash:10][ext][query]"
                }
            },
            // 处理js
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除node_modules文件（不处理node_modules文件）
                loader: 'babel-loader',
            }
        ]
    },
    // 插件
    plugins: [
        // 插件的配置
        new ESLintPlugin({// eslint语法检查插件
            // 需要检测的文件
            context: PATH.resolve(__dirname, "../src")
        }),
        new HtmlWebpackPlugin({// 动态生成html文件
            template: PATH.resolve(__dirname, "../public/index.html")
        }),
        new MiniCssExtractPlugin()
    ],
    // 开发服务器
    devServer: {
        host: "localhost",
        port: 3000,
        open: true,
    },
    // 模式
    mode: "production"
}