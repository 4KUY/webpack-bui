//ModuleOptions
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOption } from "./types/types";

export function buildLoaders(option: BuildOption): ModuleOptions["rules"]{
    const isDev = option.mode === 'development'

    const cssLoaderWithModules = {
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
        }
      },
    }
    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      
    }
    const svgLoader = {
      test: /\.svg$/i,
      use: [
        {
           loader: '@svgr/webpack',
           options: { icon: true } 
          }
        ],
    }
    return [
      assetLoader,
        {
            test: /\.css$/i,
            use: [
              isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
              cssLoaderWithModules
            ],
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          svgLoader
    ]
}