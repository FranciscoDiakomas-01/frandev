import IMyServices from "@/types/services";
import heart from '../assets/heart.png'
import star from "../assets/star.png";
import chec from '../assets/check.png'
import cop from '../assets/cop.png'
import goal from '../assets/goal.png'
import message from "../assets/message.png";
const myServices: IMyServices[] = [
  {
    id: 1,
    cover: heart,
    title: "Fullstack Web",
    description:
      "Criação de aplicações web modernas, responsivas e performáticas, com frontend e backend completos.",
    projects: 43,
  },
  {
    id: 2,
    cover: star,
    title: "Mobile Developer",
    description:
      "Desenvolvimento de aplicativos móveis nativos e híbridos com foco em desempenho e experiência do usuário.",
    projects: 24,
  },
  {
    id: 3,
    cover: chec,
    title: "Desktop Developer",
    description:
      "Aplicações desktop multiplataforma utilizando Electron e tecnologias modernas.",
    projects: 15,
  },
  {
    id: 4,
    cover: cop,
    title: "Frontend Developer",
    description:
      "Interfaces modernas, acessíveis e otimizadas com HTML, CSS, React, Tailwind, animações e design responsivo.",
    projects: 34,
  },
  {
    id: 5,
    cover: goal,
    title: "UI/UX Designer",
    description:
      "Designs centrados no usuário, prototipação em Figma e experiências visuais envolventes.",
    projects: 12,
  },
  {
    id: 53,
    cover: message,
    title: "Devops",
    description:
      "Hospedagem de sistemas , sites , aplicativos e bancos de dados",
    projects: 4,
  },
];

export default myServices;
