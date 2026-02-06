import * as webpack from "webpack";
import nodeExternals from "webpack-node-externals";
import * as path from "node:path";
import CopyPlugin from "copy-webpack-plugin";

const config: webpack.Configuration = {
    mode: "production",
    entry: {
        index: "./src/index.ts",
        // 这会生成 dist/index.js
        "types/index": "./src/types/index.ts"
    },
    devtool: "inline-source-map",
    externals: [
        nodeExternals({
            allowlist: [/electron-util/],
        }),
    ],
    output: {
        clean: true,
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
        library: {
            type: "umd",
        },
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
module.exports = config;
