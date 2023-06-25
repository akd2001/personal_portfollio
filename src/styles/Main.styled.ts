import { styled } from "styled-components";

export const MainWrapper = styled.main`
  padding: 0% 4%;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HomeImageWrapper = styled.div`
  padding: 4% 0%;
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    height: 100%;
    width: auto;
    opacity: 0;
    transform: translateX(-6vw);
  }
`;

const ImageSticks = styled.span`
  position: absolute;
  background-color: var(--theme-blue);
  top: 6%;
  left: 0;
`;

export const StickOne = styled(ImageSticks)`
  width: 0%;
  height: 0.6vw;
`;
export const StickTwo = styled(ImageSticks)`
  width: 0.6vw;
  height: 0%;
  left: -0.6vw;
`;

export const HomeDetailsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  height: 100%;
  gap: 40px;
`;

export const TopActionBlock = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: flex-end;
  padding-top: 3.14vw;
`;

export const BottomDetailsBlock = styled.div`
  width: 100%;
  height: 75%;
  padding: 4% 6%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const DetailsTop = styled.div`
  width: 100%;
`;

export const Greet = styled.div`
  font-size: 2vw;
  font-weight: 600;
  color: var(--theme-blue);
  margin-left: 0.12vw;
`;

export const TextHider = styled.div`
  overflow: hidden;
  p {
    transform: translateY(8vw);
  }
`;

export const MainText = styled.div`
  position: relative;
  font-size: 5vw;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: var(--theme-blue);
`;

export const ShadowText = styled.div`
  position: absolute;
  left: 0;
  font-size: 7vw;
  color: var(--shadow-light);
  z-index: -1;
  margin-left: -0.2vw;
  line-height: 9vw;
`;

export const Description = styled.div`
  position: relative;
  margin-top: 7vw;
  padding-left: 1.5vw;
  overflow: hidden;
  p {
    font-size: 1.2vw;
    display: inline-block;
    transform: translateX(4vw);
    opacity: 0;
  }
  span {
    position: absolute;
    height: 0%;
    width: 0.3vw;
    background-color: var(--shadow-light);
    top: 0;
    left: 0.4vw;
  }
`;

export const ResumeButton = styled.button`
  margin: 4vw 0vw 0vw 0.4vw;
  font-size: 1.3vw;
  padding: 0.6vw 3vw;
  background: transparent;
  outline: none;
  border: 0.2vw solid transparent;
  color: var(--light);
  border-radius: 0.2vw;
  font-family: "__Maven_Pro_01aeb3", "__Maven_Pro_Fallback_01aeb3";
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  span {
    border-radius: 0.2vw;
    position: absolute;
    height: 100%;
    width: 0%;
    background-color: var(--theme-blue);
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }
  &:hover {
    color: var(--light) !important;
    span {
      height: 100% !important;
      width: 100% !important;
    }
  }
`;

export const DetailsButtonConatainer = styled.div`
  width: 0%;
  height: 0.6vw;
  background-color: var(--shadow-light);
  display: flex;
  justify-content: space-around;
  z-index: 2;
`;

type detailsButtonProp = {
  y: string | number;
};

export const DetailsButton = styled.button<detailsButtonProp>`
  border-radius: 0.2vw;
  transform: translateY(${({ y }) => y});
  display: flex;
  border: none;
  padding: 0vw 1vw;
  height: 0vw;
  display: grid;
  place-items: center;
  background-color: var(--theme-blue);
  color: var(--light);
  cursor: pointer;
  position: relative;
  p {
    font-family: "__Maven_Pro_01aeb3", "__Maven_Pro_Fallback_01aeb3";
    font-size: 1.1vw;
    opacity: 0;
  }
  span.sticks {
    position: absolute;
    width: 0.01vw;
    height: calc(${({ y }) => y} - 0.6vw);
    top: calc(-${({ y }) => y} - -0.6vw);
    background-color: var(--theme-blue);
    left: 50%;
    z-index: -1;
    span {
      position: absolute;
      height: 100%;
      bottom: 0;
      left: -0.01vw;
      width: 0.3vw;
      background-color: var(--light);
    }
  }
  &:hover {
    background-color: var(--orange);
  }
`;
