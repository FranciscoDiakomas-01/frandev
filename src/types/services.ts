import { StaticImageData } from "next/image";


export default interface IMyServices {
  id: number,
  cover: StaticImageData,
  title: string,
  description: string
  projects : number
}