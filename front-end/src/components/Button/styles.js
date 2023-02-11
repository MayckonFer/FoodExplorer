import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: var(--tts-tto-100);
  color: var(--lt-100);
  padding: 1.2rem 1.4rem;
  border-radius: 1rem;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: var(--font-pop);
  &:disabled {
    opacity: 0.5;
  }
`;
