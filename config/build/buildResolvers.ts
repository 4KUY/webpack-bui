import { Configuration } from "webpack";
import { BuildOption } from "./types/types";

export function buildResolvers(option: BuildOption): Configuration["resolve"] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
      }
}