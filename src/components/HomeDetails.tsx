import {
  BottomDetailsBlock,
  Description,
  DetailsTop,
  Greet,
  HomeDetailsWrapper,
  MainText,
  ResumeButton,
  ShadowText,
  TextHider,
  TopActionBlock,
} from "@/styles/Main.styled";
import React, { useEffect } from "react";
import ButtonHanger from "./ButtonHanger";
import { Circ, Expo, gsap } from "gsap";

const HomeDetails = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    gsap.to(".frontText", {
      y: 0,
      duration: 0.8,
      delay: 0.2,
      ease: Circ.easeOut,
    });
    gsap.to(".backText", {
      y: 0,
      duration: 0.8,
      ease: Expo.easeOut,
    });
    gsap.to("#p_stick", {
      height: "106%",
      ease: Expo.easeOut,
      duration: 1,
    });
    gsap.to("#desc", {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: Expo.easeOut,
    });
    timeline.to("#resumeBtnFalse", {
      width: "104%",
      height: "114%",
      duration: 0.5,
      ease: Expo.easeOut,
    });
    timeline.to("#resumeBtn", {
      borderColor: "var(--theme-blue)",
      delay: 0.2,
    });
    timeline.to("#resumeBtnFalse", {
      width: "0%",
      height: "0%",
      delay: 0.2,
      duration: 0.3,
      borderRadius: 0,
      ease: Expo.easeIn,
    });
    gsap.to("#resumeBtn", {
      color: "var(--theme-blue)",
      delay: 1.1,
    });
    return () => {
      timeline.kill();
    };
  }, []);
  return (
    <HomeDetailsWrapper>
      <TopActionBlock>
        <ButtonHanger />
      </TopActionBlock>
      <BottomDetailsBlock>
        <DetailsTop>
          <Greet>
            <TextHider>
              <p className="frontText">Hello! I'm</p>
            </TextHider>
          </Greet>
          <MainText>
            <TextHider>
              <p className="frontText">Sayandeep Karak</p>
            </TextHider>
            <ShadowText>
              <TextHider>
                <p className="backText">Web</p>
              </TextHider>
              <TextHider>
                <p className="backText">Developer</p>
              </TextHider>
            </ShadowText>
          </MainText>
        </DetailsTop>
        <Description>
          <span id="p_stick"></span>
          <p id="desc">
            Seeking opportunities to apply my self-taught programming and web
            development skills in a dynamic industry or organization. I'm ready
            to take on new challenges to kickstart my carrer.
          </p>
        </Description>
        <ResumeButton id="resumeBtn">
          <span id="resumeBtnFalse"></span>
          Resume
        </ResumeButton>
      </BottomDetailsBlock>
    </HomeDetailsWrapper>
  );
};

export default HomeDetails;
