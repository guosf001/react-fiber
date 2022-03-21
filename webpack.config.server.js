const path = require('path')
const nodeExterals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    mode: 'development',
    entry: './server.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader'
            }
        }]
    },
    externals: [nodeExterals()]
}