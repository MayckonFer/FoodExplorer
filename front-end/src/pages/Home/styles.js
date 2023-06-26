import styled from "styled-components";

export const ContainerMain = styled.main`
  width: 100%;
  max-width: 110rem;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const Banner = styled.div`
  width: 100%;
  height: 12rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: ${({ theme }) => theme.gradient_200};
  margin-top: 4.4rem;

  position: relative;

  @media (min-width: 576px) {
    height: 16rem;
  }

  @media (min-width: 768px) {
    height: 19.9rem;
  }

  @media (min-width: 992px) {
    height: 26rem;
    margin-top: 15rem;
  }

  > img {
    position: absolute;
    top: -3rem;
    left: -4rem;

    width: 23rem;

    display: none;

    @media (min-width: 425px) {
      display: block;
    }

    @media (min-width: 576px) {
      width: 29.5rem;
    }

    @media (min-width: 768px) {
      width: 35.5rem;
    }

    @media (min-width: 992px) {
      width: 60.5rem;
      top: -13rem;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    width: 36.5rem;
    padding: 1rem;

    @media (min-width: 992px) {
      width: 52.5rem;
    }

    > h2 {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.light_100};

      @media (min-width: 576px) {
        font-size: 2.4rem;
      }

      @media (min-width: 768px) {
        font-size: 3.2rem;
      }

      @media (min-width: 992px) {
        font-size: 4rem;
      }
    }

    > small {
      font-size: 1.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.light_100};

      @media (min-width: 576px) {
        font-size: 1.4rem;
      }

      @media (min-width: 768px) {
        font-size: 1.6rem;
      }
    }
  }
`;

export const TitleHome = styled.h2`
  font-size: 3.2rem;
  font-weight: 400;
  line-height: 140%;
  color: ${({ theme }) => theme.light_100};
`;

export const WrapperCards = styled.div`
  width: 100%;
  overflow-x: auto;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  margin-top: 2.4rem;

  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.cyan_dark};
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    gap: 2.4rem;
  }
`;

export const ContainerSnack = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 5rem;
`;

export const ContainerDessert = styled.div``;

export const ContainerDrinks = styled.div``;
