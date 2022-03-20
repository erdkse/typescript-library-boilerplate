const dotenv = require('dotenv');
const webpack = require('webpack');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

dotenv.config();

module.exports = {
    entry: './index.ts',
    target: 'web',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            fs: false,
            path: require.resolve('path-browserify'),
            os: require.resolve('os-browserify/browser'),
        },
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify({NODE_ENV: 'dev', ...process.env}),
        }),
        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: [path.join(__dirname, 'build')],
                },
            },
        }),
    ],
};
