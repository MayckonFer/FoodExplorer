import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--dk-600);
  padding: 2.4rem 0;
`;

export const Spacing = styled.div`
  width: 100%;
  max-width: 110rem;
  padding: 0 2rem;
  margin: 0 auto;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (min-width: 576px) {
      flex-direction: row;
    }

    p {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 160%;
      color: var(--lt-200);
    }
  }
`;
