var webpack = require('webpack');

module.exports = {
    entry: [
        "webpack/hot/dev-server",
        "webpack-hot-middleware/client",
        "./public/js/entry.js"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader?cacheDirectory'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    progress: true,
    watch: true
}
