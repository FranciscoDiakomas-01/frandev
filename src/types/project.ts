import { StaticImageData } from "next/image";

export default interface IProject {
  id: number;
  title: string;
  cover: StaticImageData;
  description: string;
  type: "Public" | "Private",
  category : "FullStack" | "Backend" | "Mobile" | "UI UX" | "FrontEnd" | "Desktop"
  videoURL: string,
  gitHubURL: string,
  siteURL : string
  tecnologies: string[],
  
}
