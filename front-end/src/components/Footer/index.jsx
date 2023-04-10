import React from "react";

import { Container, Spacing } from "./styles";

export function Footer() {
  return (
    <Container>
      <Spacing>
        <div>
          <img
            src="/assets/images/logo-footer.png"
            alt="logo rodapé food explorer"
          />
          <p>© 2023 - Todos os direitos reservados.</p>
        </div>
      </Spacing>
    </Container>
  );
}
