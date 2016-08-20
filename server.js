const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const app = express();
const compiler = webpack(webpackConfig);
const HTTP_PORT = 3000;

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  stats: { colors: true },
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(__dirname + '/public'));

app.listen(HTTP_PORT, function() {
    console.log(`listening on ${HTTP_PORT}`);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
