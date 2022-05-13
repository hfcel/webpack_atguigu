const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports={
    entry:['./src/index.js','./src/index.html'],
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build'),

    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },{
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },{
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    name:'[hash:10],[ext]',
                    exModule:false,
                    outputPath:'imgs'
                }
            },{
                test:/\.html$/,
                loader:'html-loader'
            },{
                exclude:/\.(html|jpg|gif|png|css|less|js)$/,
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]',
                    outputPath:'media'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development',
    devServer:{
        compress:true,
        contentBase:resolve(__dirname,'build'),
        port:8000,
        open:true,
        hot:true
    }
}