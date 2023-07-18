import { IndividualSkill } from "@/styles/Skill.styled";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface props {
  color: string;
  image: StaticImageData;
  name: string;
}

const SkillCard = ({ color, image, name }: props) => {
  return (
    <IndividualSkill themeColor={color}>
      <Image src={image} width="0" height={"0"} alt="x" />
      <p>{name}</p>
      <span className="skillStick skillSt-1"></span>
      <span className="skillStick skillSt-2"></span>
    </IndividualSkill>
  );
};

export default SkillCard;
