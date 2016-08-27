import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.babel';
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
