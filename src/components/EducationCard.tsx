import React, { useEffect, useRef } from "react";
import downarrow from "@/assets/icons/down.png";
import Image from "next/image";
import { EducationBox } from "@/styles/Education.styled";
import { Expo, gsap } from "gsap";

interface props {
  title: string;
  institute: string;
  passingYear: number;
  ind: number;
  length: number;
}

const EducationCard = ({
  ind,
  institute,
  passingYear,
  title,
  length,
}: props) => {
  const icon = useRef(null);
  const card = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const matchMedia = gsap.matchMedia();
      matchMedia.add("(min-width: 801px)", () => {
        gsap.from(icon.current, {
          opacity: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: icon.current,
            scroller: "body",
            start: "top 95%",
          },
          ease: Expo.easeOut,
        });
        gsap.from(card.current, {
          opacity: 0,
          scale: 0.7,
          duration: 0.8,
          scrollTrigger: {
            trigger: card.current,
            scroller: "body",
            start: "top 95%",
          },
          ease: Expo.easeOut,
        });
      });
    });
    return () => {
      ctx.kill();
    };
  }, []);
  return (
    <>
      <EducationBox ref={card}>
        <h1>{title}</h1>
        <h4>{institute}</h4>
        <p>{passingYear}</p>
      </EducationBox>
      {ind + 1 != length && (
        <Image
          className="downArrow"
          src={downarrow}
          width="0"
          height={"0"}
          alt="x"
          ref={icon}
        />
      )}
    </>
  );
};

export default EducationCard;
