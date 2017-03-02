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
        contentBase: path.join(__dirname, "dist"),
        port: 3000
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