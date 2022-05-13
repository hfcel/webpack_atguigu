const { resolve } = require("core-js/fn/promise");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const mcep = require('mini-css-extract-plugin');
const OCAWP = require('optimize-css-assets-webpack-plugin');
// 配置node环境变量为生产环境，决定browser-list使用哪个配置
// process.env.NODE_ENV='production';

const commonCssLoader = [
    // 'style-loader',
    mcep.loader,
    'css-loader',
    {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () => [
                require('postcss-present-env')()
            ]
        }
    }
];
module.exports = {
    extry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [...commonCssLoader]
            },
            {
                test: /\.less$/,
                use: [
                    ...commonCssLoader,
                    'less-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: 'node_modules',
                loader: 'eslint-loader',
                enforce:'pre',
                options: {
                    fix: true
                }
            },
            {
                test: /\.js$/,
                exclude: 'node_modules',
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns:'usage',
                                corejs: { version: 3 },
                                targets: {
                                    chrome: '60',
                                    firefox:'50'
                                }
                            }
                        ]
                    ]
                }
            },
            {
                test:/\.(jpg|gif|png)$/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    name:'[hash:10].[ext]',
                    outputPath:'imgs',
                    esModule:false,
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader',
            },
            {
                exclude:/\.(js|css|html|less|jpg|gif|png)$/,
                loader:'file-loader',
                options:{
                    outputPath:'media'
                }
            }
        ]
    },
    plugins: [
        new mcep({
            filename: 'css/built.css'
        }),
        // compress css
        new OCAWP(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        }),
    ],
    mode: 'production'
}