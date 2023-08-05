import { styled } from "styled-components";

export const FooterArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 4.9vw;
  gap: 0.4vw;
  background-color: var(--theme-blue);
  color: var(--light);
  font-size: 1vw;
  margin-top: 5rem;
  #footlinks a {
    color: inherit;
    margin: 0.2vw;
  }
  @media (max-width: 800px) {
    gap: 0.4rem;
    height: 4.9rem;
    font-size: 1rem;
    #footlinks a {
      margin: 0.2rem;
    }
  }
`;
