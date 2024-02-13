
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOption } from "./types/types";
export function buildDevServer(option: BuildOption): DevServerConfiguration {
    return {
        port: option.port ?? 3000,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}