---
title: Create React App without create-react-app
subTitle: webpack4 setup for react app
category: "NOTE"
cover: webpack_and_react.jpg
---

## Install
1. Make a directory for project
2. Do `npm init`
3. Do `git init`
4. Install dependencies
```shell=
# React library
npm install react react-dom

# webpack
npm install --save-dev webpack webpack-cli webpack-dev-server

# babel and wepack loader
# notice: if using babel-loder@8, have to install @babel/core rather than babel-core
# and also babel-preset-env -> @babel/preset-env ,babel-preset-react -> @babel/preset-react
npm install --save-dev babel @babel/core babel-loader @babel/preset-react @babel/preset-env html-webpack-plugin
# css loader and plugin
npm install --save-dev css-loader less  less-loader extract-text-webpack-plugin@next 
# file and url loaders
npm install --save-dev file-loader url-loader
# webpack plugin: clean the dist before every build
npm install --save-dev clean-webpack-plugin
```

## Setup
### Webpack configs
`webpack.config.js`
```javascript=
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')  // 將我們提供的 html 模板自動引入打包好的 JS、CSS 
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')    // 將 CSS 從 inline 拆出來成為獨立檔案
const CleanWebpackPlugin = require('clean-webpack-plugin')  // 在每次打包前先清空目標資料夾

module.exports = env => {
    const config = require('./env')(env.NODE_ENV)
    return {
        entry: './src/client/index.js',     // 程式入口
        output: {                           // 輸出
            filename: 'bundle.[hash:4].js', // 打包後的文件名稱(增加 hash 是為了避免 cache)
            path: path.resolve('dist')      // 打包後的路徑(必須是絕對路徑)
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextWebpackPlugin.extract({
                        use: 'css-loader',
                        publicPath: '../'
                    })
                },
                {
                    test: /\.less$/,
                    use: ExtractTextWebpackPlugin.extract({
                        use: ['css-loader', 'less-loader'],
                        publicPath: '../'
                    })
                },
                {
                    test: /\.(jpe?g|png|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,             // 小於 8K 會轉成 base64, 且不會存成實體圖片
                                outputPath: 'images/'    // 圖片打包後存放的路徑
                            }
                        }
                    ]
                },
                {
                    test: /\.(eot|ttf|woff|svg)/,
                    use: 'file-loader'
                },
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    // include: /src/,            // 只會轉 src 目錄下的 JS 檔案
                    exclude: /node_modules/    // 會排除掉 node_modules ，加快打包速度
                }
            ]
        },    // 對應模組處理
        plugins: [     // 插件
            new CleanWebpackPlugin('dist'),    // 每次打包前都先清空
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/client/index.html'),  // 提供 HTML 模板，會自動將打包好的檔案引入
                hash: true,                    // 如果有 hash 也會自動加上
                wsUrl: config.url,             // 引入的變數，供 HTML template 使用   
                env: env.NODE_ENV,
            }),
            new ExtractTextWebpackPlugin('css/style.css'),    // 會把拆分成獨立檔案的 CSS 放到 dist 下面的 css/style.css        
            // new webpack.HotModuleReplacementPlugin(),    // 除了在config中設定，在index.js(入口JS) 中也需要設定(Webpack 4 不需設定此 plugin)
        ],
        resolve: {
            // 配置別名
            // alias: {}
            extensions: ['.js', 'json']  // 用來省略後綴
        },
        devServer: {
            // webpack 4 只需要在 flag 帶上需要的參數，以下全部都可以省略
            // contentBase: './dist',
            // publicPath: '/',
            // host: 'localhost',
            // port: '3333',
            // open: true,               // 自動打開瀏覽器
            // hot: true,                // hot reload
            // inline: true
        }, 
        // mode: 'development'          // 可以在 script 中給
    }
}
```
**webpack hot reload**
`index.js`(入口JS)
```javascript=
// 增加了如下的判斷才會真正的自動更新
// (Webpack 4 不需要)
if (module.hot) {    
    module.hot.accept();
}
```
### Babel
`.babelrc`
```json=
{
    ["@babel/env", "@babel/react"],    // 會從右向左解析    
    "plugins": ["@babel/plugin-proposal-class-properties"]  // 讓 class properties 可以正常運作
}
```
### Package.json
`package.json`
```json=
{
  "name": "react-chat-app",
  "version": "1.0.0",
  "description": "A chat APP made by react",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server --mode development --hot --config webpack.config.js --env.NODE_ENV=dev"
    "build": "webpack --config webpack.config.js --env.NODE_ENV=production",
  },
  "keywords": [
    "react",
    "socket.io"
  ],
  "author": "Ben",
  "license": "MIT",
  "dependencies": {
    "react": "^16.6.1",
    "react-dom": "^16.6.1"
  },
  "devDependencies": {
    "@babel/core": "^7.1.5",
    "@babel/plugin-proposal-class-properties": "^7.1.0",
    "@babel/preset-env": "^7.1.5",
    "@babel/preset-react": "^7.0.0",
    "babel": "^6.23.0",
    "babel-loader": "^8.0.4",
    "clean-webpack-plugin": "^0.1.19",
    "css-loader": "^1.0.1",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "file-loader": "^2.0.0",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.8.1",
    "less-loader": "^4.1.0",
    "nodemon": "^1.18.6",
    "react-router-dom": "^4.3.1",
    "url-loader": "^1.1.2",
    "webpack": "^4.25.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  }
}
```
### HTML template for webpack
`index.html`
```htmlmixed=
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <title>React Chat App</title>
    
    <script>
        window.env = <%= JSON.stringify(htmlWebpackPlugin.options.env) %>
        window.wsUrl = <%= JSON.stringify(htmlWebpackPlugin.options.wsUrl) %>
    </script>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

### Main JS
`index.js`
```javascript=
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './index.less'

render(<App />, document.getElementById('app'))

// if (module.hot) module.hot.accept()
```

## Project structure
![](https://i.imgur.com/CCVILat.png)
