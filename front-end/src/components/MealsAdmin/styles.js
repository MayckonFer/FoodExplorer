import styled from "styled-components";

export const Container = styled.section`
  margin-top: 5rem;
`;

export const Spacing = styled.div`
  width: 100%;
  max-width: 110rem;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  font-family: var(--font-pop);
  line-height: 140%;
  color: var(--lt-300);
  margin-bottom: 2.3rem;

  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
`;
