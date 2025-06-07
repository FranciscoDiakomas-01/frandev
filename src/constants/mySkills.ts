import ISkills, { SoftSkils } from "@/types/skills";

import css from "@/assets/tec/CSS3.svg";
import html from "@/assets/tec/HTML5.svg";
import next from "@/assets/tec/Next.js.svg";
import react from "@/assets/tec/React.svg";
import tailwind from "@/assets/tec/Tailwind-CSS.svg";
import node from "@/assets/tec/Node.js.svg";
import nest from "@/assets/tec/Nest.js.svg";
import prisma from "@/assets/tec/PostgresSQL.svg";
import ts from "@/assets/tec/TypeScript.svg";
import js from "@/assets/tec/JavaScript.svg";
import docker from "@/assets/tec/Docker.svg";
import k8 from "@/assets/tec/Kubernetes.svg";
import git from "@/assets/tec/Git.svg";
import figma from "@/assets/tec/figma.svg";

const skills: ISkills[] = [
  { id: 1, title: "React.js / React Native", category: "FrontEnd", svg: react },
  { id: 2, title: "Next.js", category: "FrontEnd", svg: next },
  { id: 3, title: "TypeScript", category: "FrontEnd", svg: ts },
  { id: 4, title: "JavaScript", category: "FrontEnd", svg: js },
  { id: 5, title: "HTML5", category: "FrontEnd", svg: html },
  { id: 6, title: "CSS3", category: "FrontEnd", svg: css },
  { id: 7, title: "Tailwind CSS", category: "FrontEnd", svg: tailwind },

  { id: 8, title: "Node.js", category: "Backend", svg: node },
  { id: 9, title: "NestJS", category: "Backend", svg: nest },
  { id: 11, title: "PostgreSQL", category: "Backend", svg: prisma },
  { id: 16, title: "Figma", category: "UIUX", svg: figma },
  { id: 18, title: "Git", category: "Devops", svg: git },
];
















const softSkills: SoftSkils[] = [
  {
    id: 1,
    title: "Comunicação eficaz",
    description:
      "Capacidade de transmitir ideias técnicas complexas de forma clara e objetiva, garantindo que tanto membros técnicos quanto não técnicos da equipe compreendam perfeitamente os conceitos e soluções propostas, facilitando a colaboração e a tomada de decisões.",
  },
  {
    id: 2,
    title: "Trabalho em equipe",
    description:
      "Habilidade de colaborar de maneira produtiva com profissionais de diferentes áreas, incluindo desenvolvedores, designers, gerentes e clientes, promovendo um ambiente harmonioso e focado na entrega dos melhores resultados para o projeto.",
  },
  
  {
    id: 4,
    title: "Adaptabilidade",
    description:
      "Flexibilidade para aprender e aplicar novas tecnologias, metodologias e ferramentas em um ambiente em constante mudança, ajustando-se rapidamente às novas demandas do mercado e aos requisitos dos projetos sem perder a qualidade do trabalho.",
  },
];
export default { softSkills  , skills};
