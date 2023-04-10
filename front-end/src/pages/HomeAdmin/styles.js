import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--dk-400);
`;

export const Spacing = styled.div`
  width: 100%;
  max-width: 110rem;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const Main = styled.main`
  padding-top: 11rem;
  padding-bottom: 4.6rem;
`;

export const WrapperInfo = styled.div`
  position: relative;
  background: var(--gts-200);
  border-radius: 0.2rem;
  display: flex;
  align-items: flex-end;
  margin-top: 4.4rem;
  height: 9rem;

  @media (min-width: 475px) {
    height: 12rem;
  }

  @media (min-width: 576px) {
    height: 18rem;
  }

  @media (min-width: 992px) {
    height: 26rem;
    margin-top: 12rem;
    border-radius: 0.8rem;
  }

  img:nth-child(1) {
    width: 100%;
    max-width: 14rem;

    @media (min-width: 375px) {
      max-width: 16rem;
    }

    @media (min-width: 576px) {
      display: none;
    }

    @media (min-width: 992px) {
      display: none;
    }
  }

  img:nth-child(2) {
    display: none;

    @media (min-width: 576px) {
      display: flex;
      max-width: 30.2rem;
    }

    @media (min-width: 992px) {
      max-width: 50.2rem;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-right: auto;
    margin-bottom: 2.2rem;

    @media (min-width: 576px) {
      margin-bottom: 5.2rem;
    }

    @media (min-width: 992px) {
      margin-bottom: 9.2rem;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      font-family: var(--font-pop);
      line-height: 140%;
      color: var(--lt-200);

      @media (min-width: 375px) {
        font-size: 1.4rem;
      }

      @media (min-width: 475px) {
        font-size: 1.8rem;
      }

      @media (min-width: 768px) {
        font-size: 3.2rem;
      }

      @media (min-width: 992px) {
        font-size: 4rem;
      }
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      font-family: var(--font-pop);
      line-height: 140%;
      color: var(--lt-200);

      @media (min-width: 475px) {
        font-size: 1.2rem;
        max-width: 27rem;
      }

      @media (min-width: 768px) {
        font-size: 1.6rem;
      }

      @media (min-width: 992px) {
        font-size: 1.6rem;
        max-width: max-content;
      }
    }
  }
`;
