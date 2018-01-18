module.exports = {
        entry: [
            './src/index.js'
        ],
        module: {
            loaders: [
                {
                    exclude: /node-modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015']
                    }
                },

            ]
        },
        resolve: {
            extensions:['.js','.jsx'],
        },
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: './dist',
        }
};