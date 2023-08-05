import { styled } from "styled-components";

export const MainSection = styled.section`
  padding: 0% 4%;
  height: min-content;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 320px) {
    width: -webkit-fill-available;
  }
`;

export const HomeImageWrapper = styled.div`
  padding: 4% 0%;
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  img {
    height: auto;
    width: 100%;
    opacity: 0;
    transform: translateX(-6vw);
  }
  p {
    display: none;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    justify-content: flex-start;
    img {
      width: 80%;
      margin-left: 10px;
    }
    p {
      display: inline-block;
      writing-mode: vertical-rl;
      color: var(--shadow-light);
      font-size: 13vw;
      opacity: 0;
      transform: translateY(-20vw);
    }
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
  @media (max-width: 800px) {
    height: 0.5rem;
  }
`;
export const StickTwo = styled(ImageSticks)`
  width: 0.6vw;
  height: 0%;
  left: -0.6vw;
  @media (max-width: 800px) {
    width: 0.5rem;
  }
`;

export const HomeDetailsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  align-self: flex-start;
  gap: 11vw;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const TopActionBlock = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: flex-end;
  padding-top: 3.14vw;
  @media (max-width: 800px) {
    padding-top: 5px;
  }
`;

export const BottomDetailsBlock = styled.div`
  width: 100%;
  height: 75%;
  padding: 5vw 6% 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 800px) {
    padding: 7rem 0 1rem 0;
  }
  @media (max-width: 600px) {
    padding: 6rem 0 1rem 0;
  }
`;

export const DetailsTop = styled.div`
  width: 100%;
`;

export const Greet = styled.div`
  font-size: 2vw;
  font-weight: 600;
  color: var(--theme-blue);
  margin-left: 0.12vw;
  @media (max-width: 800px) {
    font-size: 3vw;
    margin-left: 0.2vw;
  }
  @media (max-width: 600px) {
    font-size: 4vw;
  }
`;

export const TextHider = styled.div`
  overflow: hidden;
  p {
    transform: translateY(8vw);
  }
`;

export const MainText = styled.div`
  position: relative;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: var(--theme-blue);
  font-size: 5vw;
  @media (max-width: 800px) {
    font-size: 9vw;
  }
  @media (max-width: 600px) {
    font-size: 10vw;
  }
`;

export const ShadowText = styled.div`
  position: absolute;
  left: 0;
  font-size: 7vw;
  color: var(--shadow-light);
  z-index: -1;
  margin-left: -0.2vw;
  line-height: 9vw;
  ${TextHider}:nth-child(1) p {
    margin-left: 0.3vw;
  }
  @media (max-width: 800px) {
    font-size: 10vw;
    line-height: 14vw;
  }
  @media (max-width: 600px) {
    font-size: 13vw;
    line-height: 17vw;
  }
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
    text-align: justify;
  }
  span {
    position: absolute;
    height: 0%;
    width: 0.3vw;
    background-color: var(--shadow-light);
    top: 0;
    left: 0.4vw;
  }
  @media (max-width: 800px) {
    padding: 0 1.1rem 0;
    margin-top: 10vw;
    span {
      width: 0.3rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 600px) {
    margin-top: 14vw;
  }
`;

export const ResumeButton = styled.button`
  margin: 4vw 0vw 0vw 0.4vw;
  font-size: 1.3vw;
  padding: 0.6vw 3vw;
  background: transparent;
  outline: none;
  border-width: 0.2vw;
  border-style: solid;
  border-color: transparent;
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
  @media (max-width: 800px) {
    font-size: 1.3rem;
    padding: 0.5rem 5%;
    border-radius: 0.5vw;
    margin: 2rem 0vw 0vw 0.4vw;
    border-width: 0.3vw;
  }
`;

export const DetailsButtonConatainer = styled.div`
  width: 0%;
  height: 0.6vw;
  background-color: var(--shadow-light);
  display: flex;
  justify-content: space-around;
  z-index: 2;
  @media (max-width: 800px) {
    height: 0.5rem;
  }
`;

type detailsButtonProp = {
  y: "first" | "second" | "third";
};

export const DetailsButton = styled.button<detailsButtonProp>`
  border-radius: 0.2vw;
  transform: translateY(
    ${({ y }) => (y == "first" ? "5.7vw" : y == "second" ? "3vw" : "9vw")}
  );
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
    width: 0.12vw;
    height: calc(
      ${({ y }) => (y == "first" ? "5.7vw" : y == "second" ? "3vw" : "9vw")} -
        0.6vw
    );
    top: calc(
      -${({ y }) => (y == "first" ? "5.7vw" : y == "second" ? "3vw" : "9vw")} - -0.6vw
    );
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
  @media (max-width: 800px) {
    transform: translateY(
      ${({ y }) => (y == "first" ? "3rem" : y == "second" ? "1rem" : "5rem")}
    );
    padding: 0vw 3%;
    border-radius: 0.5vw;
    p {
      font-size: 1rem;
    }
    span.sticks {
      top: calc(
        -${({ y }) =>
            y == "first" ? "3rem" : y == "second" ? "1rem" : "5rem"} - -0.5rem
      );
      height: calc(
        ${({ y }) => (y == "first" ? "3rem" : y == "second" ? "1rem" : "5rem")} -
          1.5vw
      );
      width: 1px;
    }
  }
`;

export const StyledHr = styled.hr`
  width: 70vw !important;
  background-color: var(--shadow-light);
  margin: 25px auto 0;
`;
