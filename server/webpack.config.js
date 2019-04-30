const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    mode: 'production',
    watch: true,
    entry: './assets/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/app.js'
    },
    // MODULE
    module: {
        rules: [
            // BABEL
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // STYLE
            {
                test: /\.(sa|sc|c)ss$/,
                use:
                    [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ]
            },
            // VUE : for more info https://vue-loader.vuejs.org/#what-is-vue-loader
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],

    },
    // PLUGINS
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/app.css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          })

    ],
    // OPTIMIZATION
    optimization: {

    },

};
