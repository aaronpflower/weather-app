const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/client/index.html',
    filename: 'index.html',
    inject: 'body'
})

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
    entry: './client/index.js',
    output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]-[hash].js',
		publicPath: '/',
	},

    devtool: 'cheap-module-source-map',
    stats: 'minimal',

    plugins: [
        HTMLWebpackPluginConfig,
        extractLess
    ],

    devServer: {
        // https://github.com/chimurai/http-proxy-middleware#options ?
        proxy: {
            "/api": {
                target: "http://localhost:3000"
            }
        },
        contentBase: './dist',
        compress: true,
        port: 3001,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /.js$/,
                loaders: 'buble-loader',
                include: path.join(__dirname, 'client'),
                query: {
                    objectAssign: 'Object.assign',
                },
            }, 
            { 
                test: /\.json$/, loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules',
                include: /flexboxgrid/
            },
            {
                 test: /\.less$/,
                    use: extractLess.extract({
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    localIdentName: '[name]__[local]__[hash:base64:5]',
                                    sourceMap: true,
                                    modules: true,
                                    camelCase: true,
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: function () {
                                        return [
                                            require('autoprefixer')
                                        ];
                                    }
                                }
                            },
                            {
                                loader: "less-loader"
                            }
                        ],
                        // use style-loader in development
                        fallback: "style-loader"
                    })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
   	resolve: {
		modules: [
			'node_modules',
			path.resolve(__dirname, 'client'),
		],
	}
 };