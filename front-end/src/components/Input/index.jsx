import React from "react";

import { Container } from "./styles";

export function Input({ children, ...rest }) {
  return (
    <Container>
      {children}
      <input {...rest} />
    </Container>
  );
}
