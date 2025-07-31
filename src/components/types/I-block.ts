import type { JSX } from "@emotion/react/jsx-runtime";

export interface IBlockProps{
    bgimage?: string | undefined;
    iconTitle?: string;
    title?: string;
    subtitle?: string;
    iconA?: string;
    iconB?: string;
    data?: string;
    local?: string;
    explanation?:JSX.Element;
    childrenAvatar?: JSX.Element;
}