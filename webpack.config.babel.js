import webpack from 'webpack';

export default {
    entry: [
        "webpack/hot/dev-server",
        "webpack-hot-middleware/client",
        "./public/js/entry"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel?cacheDirectory'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].html'
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        modulesDirectories: [
            'node_modules',
        ],
        extensions: ['', '.js', '.jsx']
    },
    progress: true,
    watch: true
}
