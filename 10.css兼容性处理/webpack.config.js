const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const { resolve } = require("path");
// process.env.NODE_ENV='development';

module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:[
                // 'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader:'postcss-loader',
                    options:{
                        ident:'postcss',
                        plugins:()=>[require('postcss-preset-env')()]
                    }
                }
            ]
        }],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'css/built.css'
        }),
    ],
    mode:'development',
    devServer:{
        contentBase:resolve(__dirname,'build'),
        compress:true,
        open:true,
        port:8000
    }
}