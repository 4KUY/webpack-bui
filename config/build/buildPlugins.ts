//Configuration
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, DefinePlugin } from "webpack";
import webpack from 'webpack'
import { BuildOption } from "./types/types";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

export function buildPlugins(option: BuildOption): Configuration["plugins"] {
    const isDev = option.mode === 'development'
    const isProd = option.mode === 'production'

    return [
        new HtmlWebpackPlugin({ template:  option.paths.html }),

        new DefinePlugin({
          __PLATFORM__: JSON.stringify(option.platform)  //mis
        }),
            isDev && new ForkTsCheckerWebpackPlugin(), // only if permanent transpileOnly: true
            isDev && new webpack.ProgressPlugin(),
            isDev && new ReactRefreshPlugin(), //hmr //https://github.com/pmmmwh/react-refresh-webpack-plugin/

            isProd && new MiniCssExtractPlugin({
              filename: 'css/[name].[contenthash:8].css',
              chunkFilename: 'css/[name].[contenthash:8].css'
            })

    ].filter(Boolean)
}