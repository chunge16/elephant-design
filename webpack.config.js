const path = require('path');

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
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    }
};
