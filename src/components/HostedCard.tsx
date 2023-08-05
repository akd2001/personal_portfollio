import { HostedCardWrap } from "@/styles/Project.styled";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProjectDetailsCard from "./ProjectDetailsCard";
import { Power2, gsap } from "gsap";
import { hostedObject } from "@/data/projectData";

const HostedCard = ({
  description,
  logo,
  technologies,
  title,
  url,
}: hostedObject) => {
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        scroller: "body",
      },
      ease: Power2.easeOut,
    });
  }, []);
  return (
    <>
      <HostedCardWrap ref={cardRef}>
        <Image src={logo} alt="x" />
        <ProjectDetailsCard
          title={title}
          description={description}
          url={url}
          techs={technologies}
          isHosted={true}
        />
      </HostedCardWrap>
    </>
  );
};

export default HostedCard;
