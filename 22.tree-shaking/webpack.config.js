const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 配置node环境变量为生产环境，决定browser-list使用哪个配置
// process.env.NODE_ENV='production';


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test:/\.css/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            
        }),
    ],
    mode: 'production',
}