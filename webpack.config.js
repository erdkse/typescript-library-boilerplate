const dotenv = require('dotenv');
const webpack = require('webpack');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const DtsBundleWebpack = require('dts-bundle-webpack');
const packageJson = require('./package.json');
const CopyWebpackPlugin = require('copy-webpack-plugin');

dotenv.config();

module.exports = {
    entry: './index.ts',
    target: 'web',
    mode: 'none',
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
        libraryTarget: 'umd',
        clean: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: [path.join(__dirname, 'example', 'index.js')],
                },
                onEnd: {
                    copy: [
                        {
                            source: path.join(__dirname, 'build', 'index.js'),
                            destination: path.join(
                                __dirname,
                                'example',
                                'index.js',
                            ),
                        },
                    ],
                },
            },
        }),
        new DtsBundleWebpack({
            name: packageJson.name,
            out: 'index.d.ts',
            main: 'build/index.d.ts',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'package.json'),
                    to: path.join(__dirname, 'build', 'package.json'),
                    transform: (buffer) => {
                        const content = JSON.parse(buffer.toString());
                        return Buffer.from(
                            JSON.stringify(
                                {
                                    name: content.name,
                                    version: content.version,
                                    main: content.main,
                                    repository: content.repository,
                                    author: content.author,
                                    license: content.license,
                                    types: content.types,
                                },
                                null,
                                4,
                            ),
                        );
                    },
                },
            ],
        }),
    ],
};
