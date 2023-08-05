import { styled } from "styled-components";

export const ProjectWrapper = styled.section`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 4% 2.5rem;
`;

export const ProjectGroup = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  h1 {
    color: var(--theme-blue);
    font-size: 2vw;
    margin-top: 4vw;
    margin-bottom: 1vw;
  }
  @media (max-width: 800px) {
    gap: 1.5rem;
    margin: 14px 0px 30px 0px;
    width: 95%;
    padding-top: 0;
    h1 {
      font-size: 1.6rem;
      margin: 20px auto 10px;
    }
  }
`;

export const HostedCardWrap = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 0.4vw;
  border-left: 0.4vw solid var(--theme-blue);
  border-right: 0.4vw solid var(--theme-blue);
  width: 70%;
  display: flex;
  align-items: center;
  padding: 2vw 1.9vw;
  gap: 1.3vw;
  img {
    width: 10%;
    height: auto;
  }
  @media (max-width: 800px) {
    border-radius: 0.4rem;
    padding: 1rem 1.3rem;
    border-left: 0.4rem solid var(--theme-blue);
    border-right: 0.4rem solid var(--theme-blue);
    flex-direction: column;
    width: 100%;
    gap: 1.3rem;
    img {
      height: 65px;
      width: auto;
    }
  }
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7vw;
  .project-title {
    font-size: 1.5vw;
    font-weight: 500;
  }
  p {
    text-align: justify;
    font-size: 1.1vw;
  }
  .dev-text {
    font-weight: 500;
    text-decoration: underline;
  }
  .lang-grp {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    .lang-markers {
      text-wrap: nowrap;
      font-size: 0.9vw;
      padding: 0.6vw 0.9vw;
      color: #ffffff;
      background-color: var(--orange);
      border-radius: 0.4vw;
      cursor: default;
    }
  }
  @media (max-width: 800px) {
    gap: 0.7rem;
    .project-title {
      font-size: 1.4rem;
    }
    p {
      font-size: 1rem;
    }
    .lang-grp {
      .lang-markers {
        font-size: 0.9rem;
        padding: 0.6rem 0.5rem;
        border-radius: 0.4rem;
      }
    }
  }
`;

export const VisitButton = styled.a`
  align-self: end;
  background-color: var(--theme-blue);
  padding: 0.6vw 1.4vw;
  font-size: 1vw;
  border-radius: 0.4vw;
  cursor: pointer;
  color: var(--light);
  letter-spacing: 0.04vw;
  font-weight: 300;
  text-decoration: none;
  &:hover {
    background-color: var(--theme-blue-secondary);
  }
  @media (max-width: 800px) {
    margin-top: 0.8rem;
    letter-spacing: 0.04rem;
    padding: 0.6rem 1.4rem;
    font-size: 1rem;
    border-radius: 0.4rem;
  }
`;

export const NonHostedCardWrap = styled(HostedCardWrap)`
  flex-direction: column;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  min-height: auto;
`;
