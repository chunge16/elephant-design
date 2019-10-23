const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = Object.assign({}, base, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        port: 9000,
        open: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            template: 'index.html'
        })
    ]
});
