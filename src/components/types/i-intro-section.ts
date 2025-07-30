import type { JSX } from "react";

export interface IintroSectionProps {
  title: string;
  subtitle?: string;
  children: JSX.Element;
  centerText?: boolean | false;
}

