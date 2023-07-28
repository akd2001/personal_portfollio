import React, { useEffect } from "react";
import { Bounce, Expo, gsap } from "gsap";
import {
  CupLoader,
  GlowWrapper,
  MainWrapper,
  MyField,
  MyName,
  TextHider,
} from "@/styles/LandLoader.styled";

const LandLoader = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.to(".glower", {
      opacity: 1,
      delay: 0.5,
    });
    timeline.to(".details", {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.09,
      ease: Expo.easeInOut,
    });
    timeline.to(".topbaranimate", {
      width: "16%",
    });
    gsap.to(".cup", {
      y: 0,
      opacity: 1,
      delay: 1,
    });
    setTimeout(() => {
      timeline.to(".glower", {
        boxShadow:
          "0px 0px 1vh 10vh var(--light), 0px 0px 1vh 50vh var(--light),0px 0px 1vh 200vh var(--light)",
        ease: Bounce.easeIn,
        duration: 3,
      });
    }, 3000);
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <>
      <MainWrapper>
        <GlowWrapper className="glower"></GlowWrapper>
        <TextHider>
          <MyName className={"details"}>
            <span className={"topbaranimate"}></span>
            Sayandeep Karak
          </MyName>
          <MyField className={"details"}>Mern Stack Developer</MyField>
        </TextHider>
        <CupLoader className={"cup"}></CupLoader>
      </MainWrapper>
    </>
  );
};

export default LandLoader;
