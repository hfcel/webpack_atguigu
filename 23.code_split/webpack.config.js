const HtmlWebpackPlugin = require("html-webpack-plugin");
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
        })
    ],
    mode:'production',
    // optimization:{
    //     splitChunks:{
    //         chunks:'all'
    //     }
    // }
}