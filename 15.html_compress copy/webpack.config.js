
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            tempalte:'./src/index.js',
            collapseWhiteSpace:true,
            removeComments:true
        })
    ],
    // production mode compress js code automatically
    mode: 'production'
}