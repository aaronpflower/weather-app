const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/client/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './client/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },

    devtool: 'cheap-module-source-map',
    stats: 'minimal',

    plugins: [
        HTMLWebpackPluginConfig
    ],

    devServer: {
        // https://github.com/chimurai/http-proxy-middleware#options ?
        proxy: {
            "/api": {
                target: "http://localhost:3000"
            }
        },
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3001,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            },
        ]
    },
    resolve: {
		modules: [
			'node_modules',
			path.resolve(__dirname, 'client'),
		],
	},
 };