//ModuleOptions
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOption } from "./types/types";

export function buildLoaders(option: BuildOption): ModuleOptions["rules"]{
    const isDev = option.mode === 'development'
    return [
        {
            test: /\.css$/i,
            use: [
              isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
              "css-loader"
            ],
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
    ]
}