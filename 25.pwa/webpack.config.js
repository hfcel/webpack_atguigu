const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin=require('workbox-webpack-plugin')
const { resolve } = require("path");

module.exports={
    // entry:{
    //     main:'./src/index.js',
    //     test:'./src/test.js'
    // },
    entry:'./src/index.js',
    output:{
        filename:'js/[name].js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim:true,
            skipWaiting:true
        })
    ],
    mode:'production',

}