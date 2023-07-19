import { styled } from "styled-components";

export const SkillSection = styled.section`
  height: auto;
  padding: 0 4% 2.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.8rem;
  h1 {
    color: var(--theme-blue);
    font-size: 2vw;
    margin-top: 2vw;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 1.6rem;
      margin-top: 20px;
    }
  }
`;

export const SkillCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.8rem;
`;

type skillProp = {
  themeColor: string;
  x: number;
};

export const IndividualSkill = styled.div<skillProp>`
  height: 7.5vw;
  width: 7.5vw;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.4vw;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  gap: 0.7vw;
  transform: translateX(${({ x }) => x}vw);
  p {
    font-size: 1vw;
  }
  img {
    height: 3.2vw !important;
    width: auto !important;
  }
  .skillStick {
    position: absolute;
    background-color: ${({ themeColor }) => themeColor};
    transition: transform 0.2s ease-out;
  }
  .skillSt-1 {
    top: 0;
    left: 0;
  }
  .skillSt-2 {
    bottom: 0;
    right: 0;
  }
  .skillSt-1,
  .skillSt-2 {
    width: 100%;
    height: 0.3vw;
  }
  .skillSt-1 {
    transform: translateX(-100%);
  }
  .skillSt-2 {
    transform: translateX(100%);
  }
  &:hover {
    .skillStick {
      transform: none;
    }
  }
  @media (max-width: 800px) {
    transform: translateX(0);
    border-radius: 4px;
    height: 110px;
    width: 110px;
    p {
      font-size: 0.8rem;
    }
    img {
      height: 50px !important;
    }
    .skillSt-1,
    .skillSt-2 {
      height: 5px;
    }
  }
`;
