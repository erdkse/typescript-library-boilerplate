const dotenv = require('dotenv');
const webpack = require('webpack');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const NpmDtsPlugin = require('npm-dts-webpack-plugin');

dotenv.config();

module.exports = {
    entry: './index.ts',
    target: 'web',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.release.json',
                        },
                    },
                ],
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
                onEnd: {
                    copy: [
                        {
                            source: path.join(__dirname, 'package.json'),
                            destination: path.join(
                                __dirname,
                                'build',
                                'package.json',
                            ),
                        },
                    ],
                },
            },
        }),
        new NpmDtsPlugin({
            output: 'index.d.ts',
            root: 'build',
        }),
    ],
};
