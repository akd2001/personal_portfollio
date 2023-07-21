"use client";
import { IndividualSkill, SkillCardBox } from "@/styles/Skill.styled";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { skillDetails } from "@/app/Skills";
import { Expo, gsap } from "gsap";

interface props {
  head: string;
  skills: Array<skillDetails>;
  cardClass: string;
  direction: "left" | "right";
}

const SkillCard = ({ head, skills, cardClass, direction }: props) => {
  const headRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const matchMedia = gsap.matchMedia();
      matchMedia.add("(min-width: 801px)", () => {
        gsap.from(headRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          scrollTrigger: {
            trigger: headRef.current,
            scroller: "body",
            start: "top 90%",
          },
          ease: Expo.easeOut,
        });
        gsap.to(`.${cardClass}`, {
          x: `${direction == "left" && "-"}0vw`,
          stagger: direction == "left" ? -0.1 : 0.1,
          duration: 1,
          ease: Expo.easeOut,
          scrollTrigger: {
            trigger: `.${cardClass}`,
            scroller: "body",
            start: "top 85%",
          },
        });
      });
    });
    return () => {
      ctx.kill();
    };
  }, []);

  return (
    <>
      <h1 ref={headRef}>{head}</h1>
      <SkillCardBox>
        {skills?.map((e, i) => (
          <IndividualSkill
            key={i}
            className={cardClass}
            x={direction == "left" ? -100 + i + 1 : 100 + i + 1}
          >
            <Image src={e.img} width="0" height={"0"} alt="x" />
            <p>{e.name}</p>
            <span
              className="skillStick skillSt-1"
              style={{ backgroundColor: e.themeColor }}
            ></span>
            <span
              className="skillStick skillSt-2"
              style={{ backgroundColor: e.themeColor }}
            ></span>
          </IndividualSkill>
        ))}
      </SkillCardBox>
    </>
  );
};

export default SkillCard;
