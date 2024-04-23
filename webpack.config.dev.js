const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : 'development',
    entry : './src/index.js',
    devtool: 'inline-source-map',
    output : {
        filename : 'main1.js',
        path : path.resolve(__dirname, 'dist')
    },
    plugins : [
        new CleanWebpackPlugin(), 
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'index.html'),
          }),
    ]
 }