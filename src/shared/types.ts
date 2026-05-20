import type { ReactNode } from "react";

export const SelectedPage = {
  Home: "home",
  Benefits: "benefits",
  OurClasses: "ourclasses",
  ContactUS: "contactus",
} as const;

export type SelectedPage =
  (typeof SelectedPage)[keyof typeof SelectedPage];


export interface BenefitTypes {
  icon: ReactNode;
  title: string;
  desc: string;
}
export interface ClassTypes {
  name: string, 
  desc?: string, 
  img: string
}