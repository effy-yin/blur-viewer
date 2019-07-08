const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/blur-viewer.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "blur-viewer.js",
        publicPath: "/",
        // new dodoroy.BlurViewer()
        // export class BlurViewer
        library: "dodoroy",
        // new BlurViewer()
        // export default class BlurViewer
        // library: "BlurViewer",
        // libraryExport: "default",
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader, // style-loader creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }, {
            enforce: "pre",
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "eslint-loader"
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel-loader"
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 8192,
                    name (file) {
                        if (process.env.NODE_ENV === "development") {
                            return "[path][name].[ext][hash]";
                        } else {
                            return "[hash].[ext]";
                        }
                    }
                }
            }]
        }]
    },
    externals: {
        jquery: "$"
    },
    resolve: {
        extensions: [".js"]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.out st
            // both options are optional
            filename: "blur-viewer.css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "example"),
        publicPath: "/dist/",
        compress: true,
        port: 3008
    }
};
