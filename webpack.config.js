var webpack = require('webpack');
var path = require('path');

const hrm = 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'

module.exports = {
    devtool: 'sourcemap',
    entry: {
        app: [hrm, './src/index'],
        react: [hrm, 'react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/js/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['react-hot','babel'], include: path.join(__dirname, 'src') }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(chunkName="react", filename="react.js"),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        // Webpack 1.0
        new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};