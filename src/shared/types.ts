
export enum SelectedPage { 
  Home = "home", 
  Benefits = "benefits", 
  OurClasses = "ourclasses", 
  ContactUS = "contactus"
};

export interface BenefitTypes{
  icon: JSX.Element; 
  title:string; 
  desc:string
}
export interface ClassTypes {
  name: string, 
  desc?: string, 
  img: string
}