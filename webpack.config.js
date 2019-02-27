const webpack = require('webpack');
const path = require('path');

const config = {
    entry: {
        bundle: [
            './src/index.ts'
        ]
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        publicPath: 'public/'
    },

    watch: true,

    resolve: {
        extensions: ['.ts', '.tsx', '.js','.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|public)/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
};

module.exports = (env, options) => {
    let prod = options.mode === 'production';

    config.devtool = prod ? false : 'eval-sourcemap';

    return config;
};