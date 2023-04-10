import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;

  background-color: var(--dk-200);
  border-radius: 0.8rem;
  border: 1px solid var(--dk-300);

  margin: 0 auto;
  padding: 1.8rem;

  width: 100%;
  max-width: 21rem;
  height: 30.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    max-width: 30.1rem;
    height: 48.8rem;
    padding: 2.4rem;
  }

  > img {
    width: 100%;
    max-width: 8.8rem;

    @media (min-width: 1024px) {
      max-width: 20rem;
    }
  }
`;

export const ButtonFavorite = styled(Link)`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  > svg path {
    fill: var(--lt-100);
  }
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  font-family: var(--font-pop);
  line-height: 140%;

  text-align: center;

  color: var(--lt-300);

  @media (min-width: 1024px) {
    font-size: 2.2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 160%;
  text-align: center;
  color: var(--lt-400);
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Price = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;
  text-align: center;
  color: var(--tts-ck-200);

  @media (min-width: 1024px) {
    font-size: 3.2rem;
  }
`;
