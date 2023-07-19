import React, { useEffect } from "react";
import { SkillCardBox, SkillSection } from "@/styles/Skill.styled";
import { StaticImageData } from "next/image";
import JsIcon from "../assets/icons/js.png";
import Reacticon from "../assets/icons/react.png";
import Nxticon from "../assets/icons/nextjs.png";
import Htmlicon from "../assets/icons/html.png";
import Csslicon from "../assets/icons/css.png";
import TypeScripticon from "../assets/icons/typescript.png";
import Expressicon from "../assets/icons/expressjs.png";
import StyledIcon from "../assets/icons/styled.png";
import NodeIcon from "../assets/icons/nodejs.png";
import ReduxIcon from "../assets/icons/redux.png";
import BootIcon from "../assets/icons/bootstrap.png";
import JavaIcon from "../assets/icons/java.png";
import MySqlIcon from "../assets/icons/mysql.png";
import FireIcon from "../assets/icons/firebase.png";
import PhpIcon from "../assets/icons/php.png";
import CsharpIcon from "../assets/icons/csharp.png";
import JspIcon from "../assets/icons/jsp.png";
import GitIcon from "../assets/icons/git.png";
import MongooseIcon from "../assets/icons/mongoose.png";
import MongodbIcon from "../assets/icons/mongodb.png";
import NpmIcon from "../assets/icons/npm.png";
import LinuxIcon from "../assets/icons/linux.png";
import OracleIcon from "../assets/icons/oracle.png";
import PostManIcon from "../assets/icons/post.png";
import SkillCard from "@/components/SkillCard";
import { StyledHr } from "@/styles/Main.styled";

const Skills = () => {
  return (
    <>
      <SkillSection id="skills">
        <StyledHr />
        <SkillCard
          cardClass="comSkill"
          head="Comfortable in"
          skills={comfortSkills}
          direction="right"
        />
        <SkillCard
          cardClass="famSkill"
          head="Familier in"
          skills={familierSkills}
          direction="left"
        />
        <SkillCard
          cardClass="othSkill"
          head="Tools & databases"
          skills={otherTools}
          direction="right"
        />
      </SkillSection>
    </>
  );
};

export default Skills;

export type skillDetails = {
  name: string;
  img: StaticImageData;
  themeColor: string;
};

const comfortSkills: Array<skillDetails> = [
  {
    name: "Javascript",
    img: JsIcon,
    themeColor: "#f0db4f",
  },
  {
    name: "React",
    img: Reacticon,
    themeColor: "#00ccff",
  },
  {
    name: "Next.js",
    img: Nxticon,
    themeColor: "#000000",
  },
  {
    name: "Html",
    img: Htmlicon,
    themeColor: "#ef652a",
  },
  {
    name: "Css",
    img: Csslicon,
    themeColor: "#0277bd",
  },
  {
    name: "Typescript",
    img: TypeScripticon,
    themeColor: "#007acc",
  },
  {
    name: "Styled-Comp.",
    img: StyledIcon,
    themeColor: "#d36fb1",
  },
  {
    name: "Redux",
    img: ReduxIcon,
    themeColor: "#764abc",
  },
  {
    name: "Bootstrap",
    img: BootIcon,
    themeColor: "#7910f7",
  },
];

const familierSkills: Array<skillDetails> = [
  {
    name: "Node.Js",
    img: NodeIcon,
    themeColor: "#8cc84b",
  },
  {
    name: "Express.Js",
    img: Expressicon,
    themeColor: "#363636",
  },
  {
    name: "Mongoose",
    img: MongooseIcon,
    themeColor: "#c6322b",
  },
  {
    name: "Core Java",
    img: JavaIcon,
    themeColor: "#ea2d2e",
  },
  {
    name: "Firebase",
    img: FireIcon,
    themeColor: "#fcca3f",
  },
  {
    name: "C#",
    img: CsharpIcon,
    themeColor: "#68217a",
  },
  {
    name: "JSP & Servlet",
    img: JspIcon,
    themeColor: "#ea2d2e",
  },
  {
    name: "PHP",
    img: PhpIcon,
    themeColor: "#6181b6",
  },
];

const otherTools: Array<skillDetails> = [
  {
    name: "Git",
    img: GitIcon,
    themeColor: "#f05033",
  },
  {
    name: "MySql",
    img: MySqlIcon,
    themeColor: "#005369",
  },
  {
    name: "Mongodb",
    img: MongodbIcon,
    themeColor: "#4caf50",
  },
  {
    name: "Npm",
    img: NpmIcon,
    themeColor: "#cb3837",
  },
  {
    name: "Linux terminal",
    img: LinuxIcon,
    themeColor: "#cb3837",
  },
  {
    name: "Postman",
    img: PostManIcon,
    themeColor: "#ce1920",
  },
  {
    name: "Oracle",
    img: OracleIcon,
    themeColor: "#ce1920",
  },
];
