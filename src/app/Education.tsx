import { EducationWrapper } from "@/styles/Education.styled";
import React, { useEffect } from "react";
import { Expo, gsap } from "gsap";
import { StyledHr } from "@/styles/Main.styled";
import EducationCard from "@/components/EducationCard";

const Education = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const matchMedia = gsap.matchMedia();
      matchMedia.add("(min-width: 801px)", () => {
        gsap.from("#hrr", {
          width: "0vw",
          duration: 0.6,
          scrollTrigger: {
            trigger: "#hrr",
            scroller: "body",
            start: "top 90%",
          },
          ease: Expo.easeOut,
        });
      });
      gsap.from("#eduHead", {
        opacity: 0,
        y: 80,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#eduHead",
          scroller: "body",
          start: "top 90%",
        },
        ease: Expo.easeOut,
      });
    });
    return () => {
      ctx.kill();
    };
  }, []);

  return (
    <>
      <EducationWrapper id="education">
        <StyledHr id="hrr" style={{ margin: "0 auto 25px" }} />
        <p id="eduHead">Academic Qualifications</p>
        {EducationJourney.map((e, i) => (
          <EducationCard
            ind={i}
            length={EducationJourney.length}
            institute={e.institute}
            title={e.title}
            passingYear={e.passingYear}
            key={i}
          />
        ))}
      </EducationWrapper>
    </>
  );
};

export default Education;

type education = {
  title: string;
  institute: string;
  passingYear: number;
};

const EducationJourney: Array<education> = [
  {
    title: "Secondary Education",
    institute: "Khasmorah High School",
    passingYear: 2019,
  },
  {
    title: "Higher Secondary Education",
    institute: "Khasmorah High School",
    passingYear: 2021,
  },
  {
    title: "Certificate in Advanced Computer Programming & ApplicationS (CCPA)",
    institute: "Ramakrishna Mission Shilpamandira",
    passingYear: 2023,
  },
];
