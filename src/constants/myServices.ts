import IMyServices from "@/types/services";
import heart from '../assets/heart.png'
import star from "../assets/star.png";
import goal from '../assets/goal.png'
const myServices: IMyServices[] = [
  {
    id: 1,
    cover: heart,
    title: "Web Developer",
    description:
      "Criação de aplicações web modernas, responsivas e performáticas, com frontend e backend completos.",
    projects: 20,
  },
  {
    id: 2,
    cover: star,
    title: "Mobile Developer",
    description:
      "Desenvolvimento de aplicativos móveis nativos e híbridos com foco em desempenho e experiência do usuário.",
    projects: 7,
  },
  {
    id: 5,
    cover: goal,
    title: "UI/UX Designer",
    description:
      "Designs centrados no usuário, prototipação em Figma e experiências visuais envolventes.",
    projects: 45,
  },
];

export default myServices;
