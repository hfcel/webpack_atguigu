const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[{
            test:/\.less$/,
            use:[
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        },{
            test:/\.(jpg|png|gif)$/,
            loader:'url-loader',
            options:{
                //图片大小小于8kb，就会被base64处理
                // 优点：减小请求数量
                // 缺点：图片体积会更大
                limit:8*1024,
                esModule:false,
                name:'[hash:10].[ext]'
            }
        },{
            test:/\.html$/,
            loader:'html-loader'
        }],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}