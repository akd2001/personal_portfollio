import { keyframes, styled } from "styled-components";

export const MainWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: var(--deepbg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const MyName = styled.p`
  font-size: 3rem;
  font-weight: 400;
  color: var(--yellow);
  letter-spacing: 2px;
  position: relative;
  transform: translateY(90px);
  span {
    position: absolute;
    height: 3px;
    width: 0%;
    background-color: var(--light);
    left: 3px;
    border-radius: 4px;
  }
`;

export const MyField = styled.p`
  color: var(--light);
  letter-spacing: 0.6px;
  font-size: 1.2rem;
  transform: translateY(120px);
`;

const animloader = keyframes`
  0% {
    box-shadow: 2px 0px rgba(255, 255, 255, 0),
      12px 0px rgba(255, 255, 255, 0.3), 20px 0px rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 2px -5px rgba(255, 255, 255, 0.5),
      12px -3px rgba(255, 255, 255, 0.5), 20px -2px rgba(255, 255, 255, 0.6);
  }
  100% {
    box-shadow: 2px -8px rgba(255, 255, 255, 0),
      12px -5px rgba(255, 255, 255, 0), 20px -5px rgba(255, 255, 255, 0);
  }
`;

export const CupLoader = styled.span`
  width: 48px;
  height: 40px;
  margin-top: 30px;
  display: inline-block;
  position: relative;
  background: var(--light);
  border-radius: 15% 15% 35% 35%;
  transform: translateY(50px);
  opacity: 0;
  &::after,
  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
  }
  &:after {
    left: 45px;
    top: 8px;
    border: 4px solid var(--light);
    width: 16px;
    height: 20px;
    border-radius: 0 4px 4px 0;
  }
  &:before {
    width: 1px;
    height: 10px;
    color: var(--light);
    top: -15px;
    left: 11px;
    animation: ${animloader} 1s ease infinite;
  }
`;

export const TextHider = styled.div`
  overflow: hidden;
  text-align: center;
`;

export const GlowWrapper = styled.div`
  opacity: 0;
  position: absolute;
  top: 10%;
  left: 5%;
  background-color: var(--light);
  height: 40px;
  width: 40px;
  z-index: 1;
  border-radius: 50%;
  box-shadow: 0px 0px 1vh 0vh var(--light), 0px 0px 1vh 0vh var(--light),
    0px 0px 1vh 0vh var(--light);
`;
