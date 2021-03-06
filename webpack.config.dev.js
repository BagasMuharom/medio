'use strict';

const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(postcss)$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}