const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules:[{
            test:/\.css/,
            use:['style-loader','css-loader']
        },{
            //pack other rsources
            exclude:/\.(css|js|html)$/,
            loader:'file-loader',
            options:{
                name:'[hash:10].[ext]'
            }
            
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development',
    devServer:{
        contentBase:resolve(__dirname,'build'),
        compress:true,
        port:8000,
        open:true
    }
}
