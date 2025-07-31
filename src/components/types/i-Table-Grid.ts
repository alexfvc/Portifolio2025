import type { JSX } from "@emotion/react/jsx-runtime";

export interface ITableGrid{
    children: JSX.Element[];
    cardOrblock:string | 'card';
}