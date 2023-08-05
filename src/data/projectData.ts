import { StaticImageData } from "next/image";
import renderlistLogo from "../assets/images/renderlist-img/logo.png";
import gmailuilogo from "../assets/images/gmail-ui/logo.png";
import { tictactoe } from "./tictactoe";
import { whatsappclone } from "./whatsapp";
import { Kgs } from "./kgs";
import { think } from "./think";

export type hostedObject = {
  title: string;
  url: string;
  description: string;
  logo: StaticImageData;
  technologies: Array<string>;
};
export type nonHostedObject = {
  title: string;
  description: string;
  technologies: Array<string>;
  images: Array<StaticImageData>;
};

export const hostedProjectList: Array<hostedObject> = [
  {
    title: "RenderList",
    url: "https://renderlist.logonetek.com",
    description:
      "RenderList is a Youtube video sharing web application developed with React. You can collect multiple youtube videos and save here as a collection.",
    logo: renderlistLogo,
    technologies: ["React", "Styled-components", "Mui", "Firebase"],
  },
  {
    title: "Gmail-Ui-Clone",
    url: "https://emailtest-a1a60.web.app",
    description:
      "I developed a UI clone of Gmail using React, styled-components, and Material-UI components. This project replicates the visual design and layout of Gmail.",
    logo: gmailuilogo,
    technologies: ["React", "Styled-components", "Mui"],
  },
];

export const nonHostedProjectList: Array<nonHostedObject> = [
  tictactoe,
  whatsappclone,
];

export const instituteProjectList: Array<nonHostedObject> = [Kgs, think];
