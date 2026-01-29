const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    externals: [nodeExternals({
        allowlist: [/electron-util/]
    })],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {to: "./types", from: "./src/types/index.ts"},
                {to: "./", from: "./src/printer.jar"},
                {to: "./", from: "./package.json"},
                {to: "./", from: "./LICENSE"},
                {to: "./", from: "./PRINT.LICENSE"},
                {to: "./", from: "./README.md"},
            ],
        }),
    ],
    target: "node",
    node: {
        __dirname: false,
    },
};
