import ISkills, { SoftSkils } from "@/types/skills";

import css from "@/assets/tec/CSS3.svg";
import html from "@/assets/tec/HTML5.svg";
import next from "@/assets/tec/Next.js.svg";
import react from "@/assets/tec/React.svg";
import tailwind from "@/assets/tec/Tailwind-CSS.svg";
import node from "@/assets/tec/Node.js.svg";
import nest from "@/assets/tec/Nest.js.svg";
import prisma from "@/assets/tec/PostgresSQL.svg";
import mysql from "@/assets/tec/MySQL.svg";
import electron from "@/assets/tec/Electron.svg";
import ts from "@/assets/tec/TypeScript.svg";
import js from "@/assets/tec/JavaScript.svg";
import java from "@/assets/tec/Java.svg";
import docker from "@/assets/tec/Docker.svg";
import k8 from "@/assets/tec/Kubernetes.svg";
import git from "@/assets/tec/Git.svg";
import figma from "@/assets/tec/figma.svg";

const skills: ISkills[] = [
  { id: 1, title: "React.js", category: "FrontEnd", svg: react },
  { id: 2, title: "Next.js", category: "FrontEnd", svg: next },
  { id: 3, title: "TypeScript", category: "FrontEnd", svg: ts },
  { id: 4, title: "JavaScript", category: "FrontEnd", svg: js },
  { id: 5, title: "HTML5", category: "FrontEnd", svg: html },
  { id: 6, title: "CSS3", category: "FrontEnd", svg: css },
  { id: 7, title: "Tailwind CSS", category: "FrontEnd", svg: tailwind },

  { id: 8, title: "Node.js", category: "Backend", svg: node },
  { id: 9, title: "NestJS", category: "Backend", svg: nest },
  { id: 11, title: "PostgreSQL", category: "Backend", svg: prisma },
  { id: 12, title: "MySQL", category: "Backend", svg: mysql },
  { id: 14, title: "React Native", category: "Mobile", svg: react },
  { id: 16, title: "Figma", category: "UIUX", svg: figma },

  { id: 18, title: "Docker", category: "Devops", svg: docker },
  { id: 18, title: "Kubernets", category: "Devops", svg: k8 },
  { id: 18, title: "Git", category: "Devops", svg: git },

  { id: 21, title: "Java", category: "Backend", svg: java },
  { id: 22, title: "Electron.js", category: "Automação", svg: electron },
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
    id: 3,
    title: "Resolução de problemas",
    description:
      "Capacidade analítica para identificar rapidamente os desafios e gargalos em sistemas ou processos, investigando as causas raiz e aplicando soluções criativas e eficientes que minimizem impactos negativos e promovam melhorias contínuas.",
  },
  {
    id: 4,
    title: "Adaptabilidade",
    description:
      "Flexibilidade para aprender e aplicar novas tecnologias, metodologias e ferramentas em um ambiente em constante mudança, ajustando-se rapidamente às novas demandas do mercado e aos requisitos dos projetos sem perder a qualidade do trabalho.",
  },
  {
    id: 5,
    title: "Proatividade",
    description:
      "Iniciativa para identificar oportunidades de melhoria, antecipar possíveis problemas e agir de forma autônoma para implementar soluções, contribuindo para o sucesso do projeto e o aprimoramento contínuo do ambiente de trabalho.",
  },
  {
    id: 6,
    title: "Gerenciamento de tempo",
    description:
      "Organização eficaz das tarefas e prioridades para cumprir prazos estabelecidos, mesmo em ambientes ágeis e dinâmicos, mantendo a produtividade sem comprometer a qualidade do trabalho entregue.",
  },
  {
    id: 7,
    title: "Pensamento crítico",
    description:
      "Capacidade de analisar informações e situações de forma lógica e detalhada, avaliando alternativas e consequências para tomar decisões técnicas fundamentadas, evitando erros e otimizando soluções.",
  },
  {
    id: 9,
    title: "Autonomia",
    description:
      "Habilidade para trabalhar de forma independente, assumindo responsabilidade pelas próprias tarefas e decisões, entregando resultados consistentes e cumprindo os objetivos sem necessidade de supervisão constante.",
  },
  {
    id: 10,
    title: "Empatia",
    description:
      "Capacidade de se colocar no lugar do outro, entendendo as necessidades, dificuldades e expectativas de colegas, clientes e usuários finais, o que contribui para uma comunicação mais eficiente, melhor colaboração e produtos mais alinhados com o público.",
  },
];
export default { softSkills  , skills};
