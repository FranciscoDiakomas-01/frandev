import { StaticImageData } from "next/image"

export default interface ISkiils {
  id: number,
  title: string
  category: "FrontEnd" | "Backend" | "Mobile" | "UIUX" | "FullStack" | "Devops" | "Scripting" | "Automação",
  svg : StaticImageData
}

export interface SoftSkils {
  id: number;
  title: string;
  description : string
}