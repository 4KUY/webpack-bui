import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { buildWebpack } from './config/build/buildWebpack';
import { BuildPaths, Mode } from './config/build/types/types';

interface EnvVariable {
  mode:Mode;
  port: number;
}

export default (env: EnvVariable) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry:  path.resolve(__dirname, 'src','index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths
  })
    return config
}