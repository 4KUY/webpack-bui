import path from 'path'

import MiniCssExtractPlugin from "mini-css-extract-plugin"
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { BuildOption } from './types/types';
import { buildResolvers } from './buildResolvers';

export function buildWebpack(option: BuildOption): webpack.Configuration {
    const {mode, paths} = option
    const isDev = mode === 'development'
    return {
        mode: mode ?? 'development',
        entry: paths.entry, 
        output: {
            path: paths.output, 
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(option), 
          module: {
            rules: buildLoaders(option),
          },
          resolve: buildResolvers(option),
          devtool: isDev && 'inline-source-map',
          devServer: isDev ? buildDevServer(option) : undefined ,
    }
}