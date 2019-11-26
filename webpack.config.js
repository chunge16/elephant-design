const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // 使用的扩展名
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'elephantDesign',
        libraryTarget: 'umd'
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: path.resolve(__dirname, './lib/assets/icons')
            },
            {
                test: /\.svg$/,
                loader: 'file-loader',
                exclude: path.resolve(__dirname, './lib/assets/icons')
            },
            {
                test: /\.s([ac])ss$/,
                use: [
                    devMode
                        ? 'style-loader'
                        : {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: process.env.NODE_ENV === 'development',
                                publicPath: './lib'
                            },
                        }, {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: devMode
                                    ? '[path][name]__[local]'
                                    : '[path][name]__[local]--[hash:base64:5]',
                                context: path.resolve(__dirname, 'lib'),
                                hashPrefix: 'my-custom-hash',
                            },
                            localsConvention: 'camelCase'  // 类名将被骆驼化
                        },
                    },
                    'sass-loader'
                ]
            },
        ]
    }
};
