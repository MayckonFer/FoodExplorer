import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
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
    justify-content: center;
    gap: 7.3rem;

    margin: 0 auto;

    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
    }

    img {
      width: 100%;
      max-width: max-content;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  width: 100%;
  max-width: 34.8rem;

  @media (min-width: 1024px) {
    background-color: var(--dk-700);
    border-radius: 1.6rem;
    padding: 6.4rem;
    max-width: 42.8rem;
  }

  legend {
    font-size: 3.2rem;
    font-weight: 500;
    font-family: var(--font-pop);
    line-height: 140%;
    text-align: center;
    color: var(--lt-100);
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;

    width: 100%;
    max-width: 47.6rem;

    label {
      font-size: 16px;
      font-weight: 400;
      line-height: 100%;
      color: var(--lt-400);
    }
  }

  a {
    font-size: 1.4rem;
    font-weight: 500;
    font-family: var(--font-pop);
    line-height: 2.4rem;
    text-align: center;
    color: #ffffff;
  }
`;
