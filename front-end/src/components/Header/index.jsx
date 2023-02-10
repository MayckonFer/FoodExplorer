import React from "react";

import { Container, Spacing } from "./styles";

export function Header() {
  return (
    <Container>
      <Spacing>
        <img src="/images/logo.png" alt="Logo Food Explorer" />
      </Spacing>
    </Container>
  );
}
