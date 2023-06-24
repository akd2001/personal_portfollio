import {
  BottomDetailsBlock,
  Description,
  DetailsTop,
  Greet,
  HomeDetailsWrapper,
  MainText,
  ResumeButton,
  ShadowText,
  TopActionBlock,
} from "@/styles/Main.styled";
import React from "react";
import ButtonHanger from "./ButtonHanger";

const HomeDetails = () => {
  return (
    <HomeDetailsWrapper>
      <TopActionBlock>
        <ButtonHanger />
      </TopActionBlock>
      <BottomDetailsBlock>
        <DetailsTop>
          <Greet>Hello! I'm</Greet>
          <MainText>
            Sayandeep Karak
            <ShadowText>Web Developer</ShadowText>
          </MainText>
        </DetailsTop>
        <Description>
          Seeking opportunities to apply my self-taught programming and web
          development skills in a dynamic industry or organization. I'm ready to
          take on new challenges to kickstart my carrer.
        </Description>
        <ResumeButton>Resume</ResumeButton>
      </BottomDetailsBlock>
    </HomeDetailsWrapper>
  );
};

export default HomeDetails;
