import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  background-color: var(--dk-700);
  padding: 5rem 0 2rem;

  @media (min-width: 992px) {
    padding: 2.8rem 0;
  }
`;

export const Spacing = styled.div`
  width: 100%;
  max-width: 110rem;
  padding: 0 2rem;
  margin: 0 auto;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a img {
      width: 18.6rem;
    }
  }
`;

export const OpenMenu = styled.button`
  display: flex;

  > svg line {
    color: var(--lt-100);
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const WrapperInput = styled.div`
  width: 100%;
  display: none;

  > svg path {
    fill: var(--lt-400);
  }

  @media (min-width: 992px) {
    display: flex;
    max-width: 45.1rem;
  }

  @media (min-width: 1100px) {
    display: flex;
    max-width: 58.1rem;
  }
`;

export const WrapperCart = styled.div`
  display: flex;
  align-items: center;

  > button:nth-child(1) {
    display: none;
    align-items: center;
    gap: 1rem;

    @media (min-width: 992px) {
      display: flex;
    }
  }

  > button:nth-child(2) {
    position: relative;

    > span {
      position: absolute;
      top: -1rem;
      right: -1rem;

      background-color: var(--tts-tto-200);
      padding: 0.1rem 0.5rem;
      border-radius: 50%;
      color: var(--lt-100);
    }

    @media (min-width: 992px) {
      display: none;
    }
  }
`;

export const LogOut = styled.button`
  display: none;

  > svg line,
  svg path,
  svg polyline {
    color: var(--lt-100);
  }

  @media (min-width: 992px) {
    display: flex;
  }
`;
