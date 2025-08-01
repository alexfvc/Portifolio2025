import type { JSX } from "@emotion/react/jsx-runtime";

export interface iHomeProjectsBlockConponentProps{
    headerImage?: string;
    iconTitle?: string;
    title: string;
    subtitle?: string;
    iconA?:string;
    iconB?:string;
    textAbout?: JSX.Element;
}