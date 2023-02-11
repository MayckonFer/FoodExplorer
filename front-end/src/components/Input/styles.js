import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--dk-900);
  color: var(--lt-400);
  margin-bottom: 0.8rem;
  border-radius: 1rem;

  > input {
    height: 5.6rem;
    width: 100%;
    padding: 1.2rem;
    color: var(--lt-400);
    background: transparent;
    border: 0;
    outline: none;

    &:placeholder {
      color: var(--lt-400);
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`;
