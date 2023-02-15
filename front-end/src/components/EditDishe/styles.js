import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4.2rem;

  margin-top: 3.6rem;

  a {
    display: flex;
    align-items: center;
    gap: 1.1rem;

    font-size: 2.4rem;
    font-family: var(--font-pop);
    font-weight: 500;
    line-height: 140%;

    color: var(--lt-300);

    > svg path {
      color: var(--lt-100);
    }
  }
`;

export const Dishe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  width: 100%;
  max-width: 35rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: max-content;
  }

  > img {
    width: 100%;
    max-width: 26.4rem;

    @media (min-width: 992px) {
      max-width: 39rem;
      margin-right: 2.5rem;
    }
  }
`;

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  @media (min-width: 992px) {
    align-items: flex-start;
  }

  > h2 {
    font-size: 2.8rem;
    font-family: var(--font-pop);
    font-weight: 500;
    line-height: 140%;
    color: var(--lt-300);

    @media (min-width: 768px) {
      font-size: 4rem;
      text-align: left;
    }
  }

  > p {
    font-size: 1.6rem;
    font-family: var(--font-pop);
    font-weight: 400;
    line-height: 140%;
    text-align: center;
    color: var(--lt-300);

    @media (min-width: 992px) {
      font-size: 2.2rem;
      text-align: left;
    }
  }
`;

export const WrapperTags = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2.4rem;
  column-gap: 2.4rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(6, 1fr);
  }

  > span {
    background: var(--dk-1000);
    border-radius: 0.5rem;

    padding: 0.4rem 0.8rem;

    font-size: 1rem;
    font-family: var(--font-pop);
    font-weight: 500;
    line-height: 2.4rem;
    text-align: center;
    color: var(--lt-100);

    display: block;

    @media (min-width: 1100px) {
      font-size: 1.4rem;
    }
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 425px) {
    flex-direction: row;
  }

  > div {
    display: flex;
    align-content: center;
    gap: 2rem;

    > button svg path {
      fill: var(--lt-100);
    }

    span {
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 160%;

      color: var(--lt-300);
    }
  }

  > button {
    font-size: 1.2rem;
    font-family: var(-font-pop);
    font-weight: 500;
    line-height: 1.6rem;
    color: var(--lt-100);

    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (min-width: 768px) {
      > img {
        display: none;
      }
    }

    @media (min-width: 992px) {
      font-size: 1.4rem;
    }
  }
`;
