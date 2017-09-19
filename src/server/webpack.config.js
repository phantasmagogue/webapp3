const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PugWebpackPlugin = require('pug-loader');
module.exports = {
    entry: './webFrontend/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.pug$/, use: 'pug-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '!!pug-loader!webFrontend/index.pug'
        }),
    ]
};