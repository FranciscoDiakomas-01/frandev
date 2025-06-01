import IProject from "@/types/project";
import enna from "@/assets/projects/enna.jpeg";
import pronance from "@/assets/projects/pronance.jpg";
import smart from "@/assets/projects/smattpresence.jpeg";
import secap from "@/assets/projects/secap.jpeg";
import lifestyle from "@/assets/projects/lifeStyle.jpg";
import ima from "@/assets/projects/ima.jpeg";
import akuami from "@/assets/projects/akuami.jpeg";
import fastfood from "@/assets/projects/FastFood.png";
import wheaher from "@/assets/projects/wheater.jpeg";
import timer from "@/assets/projects/download.png";
const Projects: IProject[] = [
  {
    cover: enna,
    category: "FullStack",
    description:
      "Sistema desenvolvido para técnicos de help desk da Enna, com o objetivo de organizar e monitorar atividades diárias, semanais e mensais de forma eficiente.",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/enna",
    id: 1,
    siteURL: "https://enna-amber.vercel.app/",
    title: "Enna",
    type: "Private",
    tecnologies: [
      "Next Js",
      "React Js",
      "Node Js",
      "Nest Js",
      "Typescript",
      "Taiwind Css",
      "Postgres",
    ],
    videoURL: "",
  },
  {
    cover: pronance,
    category: "FullStack",
    description:
      "O sistema E-Learning foi desenvolvido com o objetivo de facilitar o acesso à educação digital de forma simples, acessível e eficiente. A plataforma permite que alunos se cadastrem, escolham cursos, assistam às aulas, realizem avaliações e recebam certificados de conclusão — tudo isso de forma online e responsiva",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/PronancePlatform-pro",
    id: 12,
    siteURL: "https://pronance-rouge.vercel.app/",
    title: "Pronance",
    type: "Private",
    tecnologies: [
      "React Js",
      "Node Js",
      "Expreess Js",
      "Typescript",
      "Taiwind Css",
      "Postgres",
    ],
    videoURL: "",
  },
  {
    cover: smart,
    category: "FullStack",
    description:
      "O sistema de controle de presença por QR Code foi desenvolvido para modernizar e automatizar o registro de presença em eventos, aulas, workshops, empresas ou qualquer outro ambiente que exija controle de frequência. A solução é rápida, segura, e reduz drasticamente o risco de fraudes ou registros manuais incorretos.",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/smrtPresence-master",
    id: 1,
    siteURL: "https://smartpresence2025.vercel.app/",
    title: "Smart presence",
    type: "Private",
    tecnologies: [
      "React Js",
      "Node Js",
      "Expreess Js",
      "Typescript",
      "Csss",
      "Mysql",
    ],
    videoURL: "",
  },
  {
    cover: secap,
    category: "Backend",
    description:
      "O Sistema de Educação, Formação e Capacitação foi desenvolvido com o objetivo de oferecer uma plataforma integrada e acessível para o desenvolvimento educacional, técnico e profissional de alunos, colaboradores e membros de instituições públicas ou privadas.",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/secap-backend",
    id: 1,
    siteURL: "",
    title: "Secap",
    type: "Private",
    tecnologies: ["Node Js", "Nest Js", "Typescript", "Prisma", "Postgres"],
    videoURL: "",
  },
  {
    cover: lifestyle,
    category: "FrontEnd",
    description:
      "A landing page da loja de roupas foi projetada para causar impacto visual imediato, comunicar os valores da marca, destacar os principais produtos e converter visitantes em compradores. Com um design responsivo e interativo, a página transmite sofisticação, praticidade e identidade de moda.",
    gitHubURL: "",
    id: 1,
    siteURL: "",
    title: "LifeStyle",
    type: "Public",
    tecnologies: ["React Js", "Typescript", "Gsap", "Css"],
    videoURL: "",
  },
  {
    cover: ima,
    category: "FrontEnd",
    description:
      "Essa landing page foi feita para apresentar a IMA Group , transmitir credibilidade e permitir que os visitantes entrem facilmente em contato via e-mail ou WhatsApp. O design é moderno, limpo e orientado para conversão e confiança.",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/group-ima",
    id: 1,
    siteURL: "https://groupima2025.vercel.app/",
    title: "IMA Group",
    type: "Public",
    tecnologies: ["React Js", "Typescript", "Gsap", "Css"],
    videoURL: "",
  },
  {
    cover: akuami,
    category: "FullStack",
    description:
      "A landing page foi cuidadosamente planejada para comunicar tecnologia, confiança e praticidade, apresentando produtos eletrônicos e licenças digitais de forma clara, atrativa e com foco total na conversão do visitante em comprador. O layout é responsivo, moderno e com foco na experiência do usuário.",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/akuami",
    id: 1,
    siteURL: "https://akuami.vercel.app/",
    title: "Akuami",
    type: "Private",
    tecnologies: [
      "Next Js",
      "React Js",
      "Node Js",
      "Nest Js",
      "Typescript",
      "Taiwind Css",
      "Postgres",
    ],
    videoURL: "",
  },
  {
    cover: fastfood,
    category: "FrontEnd",
    description:
      "A landing page foi cuidadosamente planejada para comunicar cozinha, comida . O layout é responsivo, moderno e com foco na experiência do usuário.",
    gitHubURL: "",
    id: 1,
    siteURL: "",
    title: "FastFood",
    type: "Public",
    tecnologies: ["HTML5", "CSS", "JS"],
    videoURL: "",
  },
  {
    cover: wheaher,
    category: "FrontEnd",
    description: "App de clima",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/app-clima",
    id: 1,
    siteURL: "https://app-clima-rust-ten.vercel.app/",
    title: "Wheather APP",
    type: "Public",
    tecnologies: ["HTML5", "CSS", "JS"],
    videoURL: "",
  },
  {
    cover: wheaher,
    category: "Backend",
    description: "Backend do meu Blog",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/FNotes-Backend",
    id: 1,
    siteURL: "",
    title: "FNotes",
    type: "Public",
    tecnologies: ["JS", "Express", "Postgres", "Node js"],
    videoURL: "",
  },
  {
    cover: wheaher,
    category: "Backend",
    description:
      "Backend do um sistema de postagem muiti usuários , comentários e likes",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/JiaBackend",
    id: 1,
    siteURL: "",
    title: "JIA",
    type: "Public",
    tecnologies: ["JS", "Express", "Postgres", "Node js"],
    videoURL: "",
  },
  {
    cover: wheaher,
    category: "Backend",
    description:
      "Backend do um sistema de publicações escolares , anuncios , cadastro de professores , encarregados  e alunos , com  a possibilidade de views comentários",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/Osapp28Backedn",
    id: 1,
    siteURL: "",
    title: "OSAP28",
    type: "Public",
    tecnologies: ["Express", "Postgres", "Node js", "Typescript"],
    videoURL: "",
  },
  {
    cover: timer,
    category: "FrontEnd",
    description:
      "Temporizador com as funionalidade de começar , recomeçar , pausar  e toca uma música quando o tempo termina",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/Pomodoro",
    id: 1,
    siteURL: "https://pomodoro-umber-phi.vercel.app/",
    title: "Temporizador",
    type: "Public",
    tecnologies: ["HTML", "CSS", "JS"],
    videoURL: "",
  },
];

export default Projects;
