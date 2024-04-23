const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode : 'development',
    entry : './src/index.js',
    output : {
        filename : 'main1.js',
        path : path.resolve(__dirname, 'dist')
    },
    plugins : [
        new CleanWebpackPlugin()
    ]
 }