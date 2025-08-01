import type { JSX } from "@emotion/react/jsx-runtime";

export interface iHomeExperiencesBlockConponentProps{
    iconTitle?: string;
    title: string;
    subtitle?: string;
    data?: string; 
    local?: string;
    textAbout?: JSX.Element;
}