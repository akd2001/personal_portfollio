import { styled } from "styled-components";

export const EducationWrapper = styled.section`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0px;
  #eduHead {
    color: var(--theme-blue);
    font-size: 2vw;
    font-weight: bold;
    margin: 2vw auto 4vw;
  }
  @media (max-width: 800px) {
    margin: 14px 0px 30px 0px;
    padding-top: 0;
    #eduHead {
      font-size: 1.6rem;
      margin: 20px auto 40px;
    }
  }
`;

export const EducationBox = styled.div`
  padding: 1vw 2vw;
  display: flex;
  flex-direction: column;
  gap: 0.3vw;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 0.4vw;
  border-top: 0.3vw solid var(--orange);
  text-align: center;
  max-width: 90%;
  h1 {
    color: var(--theme-blue-secondary);
    font-size: 1.5vw;
  }
  h4,
  p {
    color: var(--shadow);
    font-size: 1vw;
  }
  @media (max-width: 800px) {
    border-width: 3px;
    padding: 8px 21px;
    h1 {
      font-size: 1.1rem;
    }
    h4,
    p {
      font-size: 0.8rem;
    }
  }
`;
