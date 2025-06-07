import IProject from "@/types/project";
import enna from "@/assets/projects/enna.jpeg";
import pronance from "@/assets/projects/pronance.png";
import smart from "@/assets/projects/smattpresence.jpeg";
import ima from "@/assets/projects/ima.jpeg";
import akuami from "@/assets/projects/akuami.jpeg";
const Projects: IProject[] = [
  {
    cover: enna,
    category: "Web",
    description:
      "Sistema desenvolvido para técnicos de help desk da Enna, com o objetivo de organizar e monitorar atividades diárias, semanais e mensais de forma eficiente.",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/enna",
    id: 1,
    siteURL: "https://enna-amber.vercel.app/",
    title: "Enna",
    type: "Private",
    tecnologies: [
      "Next Js",
      "Nest Js",
      "Typescript",
      "Taiwind Css",
      "Postgres",
    ],
    videoURL: "",
  },
  {
    cover: pronance,
    category: "Web",
    description:
      "O sistema E-Learning. A plataforma permite que alunos se cadastrem, escolham cursos, assistam às aulas e recebam certificados de conclusão.",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/PronancePlatform-mvp",
    id: 12,
    siteURL: "https://pronance-platform-mvp.vercel.app/",
    title: "Pronance",
    type: "Private",
    tecnologies: [
      "React Js",
      "Node Js",
      "Typescript",
      "Postgres",
    ],
    videoURL: "",
  },
  {
    cover: smart,
    category: "Web",
    description:
      "O sistema de controle de presença por QR Code desenvolvido para modernizar e automatizar o registro de presença.",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/smrtPresence-master",
    id: 1,
    siteURL: "https://smartpresence2025.vercel.app/",
    title: "Smart presence",
    type: "Private",
    tecnologies: [
      "React Js",
      "Node Js",
      "Typescript",
      "Mysql",
    ],
    videoURL: "",
  },
  {
    cover: ima,
    category: "Web",
    description:
      "Essa landing page foi feita para apresentar a IMA Group , transmitir credibilidade e permitir que os visitantes entrem facilmente em contato via e-mail ou WhatsApp",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/group-ima",
    id: 1,
    siteURL: "https://groupima2025.vercel.app/",
    title: "IMA Group",
    type: "Public",
    tecnologies: ["React Js", "Typescript", "Css"],
    videoURL: "",
  },
  {
    cover: akuami,
    category: "Web",
    description:
      "E-comercer (loja virtual) com funcionalidades de carrinho , compras , pagamentos e monitoramento de entregas",
    gitHubURL: "https://github.com/FranciscoDiakomas-01/akuami",
    id: 1,
    siteURL: "https://akuami.vercel.app/",
    title: "Akuami",
    type: "Private",
    tecnologies: [
      "Next Js",
      "Node Js",
      "Typescript",
      "Taiwind Css",
      "Postgres",
    ],
    videoURL: "",
  },

  {
    cover: enna,
    category: "UI UX",
    description: "UI UX no Figma de um  Sistema de gestão escolar",
    gitHubURL: "",
    id: 1,
    siteURL:
      "https://www.figma.com/design/AyHB0umR85nnML8Qa7yaTE/DashBoard---ELearn-Platform-made-by-Francisco-Diakomas?node-id=0-1&t=zA0NgZPfLdq7OEKp-1",
    title: "Sistema de gestão Escolar",
    type: "Private",
    tecnologies: ["Figma"],
    videoURL: "",
  },
  {
    cover: enna,
    category: "UI UX",
    description:
      "UI UX no Figma de um Sistema d formação , educação e capacitação profissional",
    gitHubURL: "",
    id: 1,
    siteURL:
      "https://www.figma.com/design/My4dQM1dKrq6ouANc9ZoMe/AngoLearn?node-id=0-1&t=okFxILzRi1W8TXDR-1",
    title: "AngoLearn",
    type: "Private",
    tecnologies: ["Figma"],
    videoURL: "",
  },
];

export default Projects;
