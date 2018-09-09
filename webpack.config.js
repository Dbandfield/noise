const path = require('path');

module.exports = {
    mode: 'development',

    entry: './src/index.tsx',

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        sourceMapFilename: 'bundle.map'
    },

    devServer: {
        contentBase: './dist'
    },

    devtool: '#source-map',

    module: {

        rules: [
            // JSX rules
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },

            // CSS rules
            {
                test: /\.scss$/,
                use: [ "style-loader",
                       "css-loader",
                       "sass-loader"]
            },

            // URL rules
            {
                test: /\.(svg|eot|woff2|woff|ttf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'img/[hash]-[name].[ext]'
                    }
                }]
            } 

        ],

    
    }
}