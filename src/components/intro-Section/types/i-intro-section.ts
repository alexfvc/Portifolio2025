import type { JSX } from "react";

export interface IntroSectionProps {
  title: string;
  subtitle?:string;
  children: JSX.Element;
  centerText?:boolean;
}

