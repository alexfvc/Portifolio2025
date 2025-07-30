import type { JSX } from "react";

export interface ICardProps{
    iconPrimary: string;
    iconBg?: boolean | false;
    title: string;
    subtitle?: string;
    subtitle2?: string;
    children?: JSX.Element[];
    mh?:number | 0;
    mw?:number | 0;
}