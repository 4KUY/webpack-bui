//Configuration
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import webpack from 'webpack'
import { BuildOption } from "./types/types";


export function buildPlugins(option: BuildOption): Configuration["plugins"] {
    const isDev = option.mode === 'development'
    const isProd = option.mode === 'production'

    return [
        new HtmlWebpackPlugin({ template:  option.paths.html }),
            isDev && new webpack.ProgressPlugin(),
            isProd && new MiniCssExtractPlugin({
              filename: 'css/[name].[contenthash:8].css',
              chunkFilename: 'css/[name].[contenthash:8].css'
            })
    ].filter(Boolean)
}