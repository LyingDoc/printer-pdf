import type {Configuration} from 'webpack';
import nodeExternals from "webpack-node-externals";
import * as path from "node:path";
import CopyPlugin from "copy-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: Configuration = {
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
        }) as any,
    ],
    optimization: {
        minimize: true,   // 这里改回 true
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: false,      // 不压缩逻辑
                    mangle: false,        // 不混淆变量名
                    output: {
                        beautify: true,   // ✅ 美化输出
                        indent_level: 2,  // 缩进 2 空格
                        comments: true,   // 保留注释
                    },
                },
            }),
        ],
        moduleIds: 'named',
        chunkIds: 'named',
    },
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
export default config;
