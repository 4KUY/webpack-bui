export interface BuildPaths {
    entry:string;
    html:string;
    output:string;
}

export type Mode = 'production' | 'development'
export interface BuildOption {
    port:number;
    paths:BuildPaths;
    mode:Mode;
}