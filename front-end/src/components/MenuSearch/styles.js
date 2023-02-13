import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  top: 0;
  z-index: 1000;

  width: 100vw;
  height: 100vh;

  background-color: var(--dk-400);

  display: none;
`;

export const Spacing = styled.div`
  width: 100%;
  max-width: 140rem;
  padding: 0 2rem;
  margin: 0 auto;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.6rem;

    margin-top: 3.6rem;

    button {
      font-size: 2.4rem;
      font-family: var(--font-pop);
      font-weight: 400;
      line-height: 140%;
      color: var(--lt-100);
      text-align: left;
      padding-bottom: 1rem;

      border-bottom: 1px solid var(--dk-700);
    }
  }
`;

export const Menu = styled.div`
  background-color: var(--dk-700);
  padding: 5rem 0 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 2.5rem;
    color: var(--lt-100);
  }
`;

export const ButtonClose = styled.button`
  > svg path {
    fill: var(--lt-100);
  }
`;
