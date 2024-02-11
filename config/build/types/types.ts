export interface BuildPaths {
    entry:string;
    html:string;
    output:string;
}

export type Mode = 'production' | 'development'
export type BuildPlatform = 'mobile' | 'desktop'
export interface BuildOption {
    port:number;
    paths:BuildPaths;
    mode:Mode;
    platform:BuildPlatform;
}