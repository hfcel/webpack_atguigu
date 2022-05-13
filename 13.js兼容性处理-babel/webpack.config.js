
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
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        {
                            useBuiltIns:'usage',
                            corejs:{
                                version:3
                            },
                            targets:{
                                chrome:'60',
                                firefox:'60',
                                ie:'9',
                                
                            }
                        }
                    ]
                }
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            tempalte:'./src/index.js'
        })
    ],
    mode: 'development'
}