import React from "react";

import { Container, Spacing, Form } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Spacing>
        <div>
          <img src="/images/logo.png" alt="Logo Food Explorer" />

          <Form>
            <div>
              <label htmlFor="email-sigin">E-mail</label>
              <input
                type="email"
                placeholder="Exemplo: exemplo@exemplo.com.br"
                required
              />
            </div>
            <div>
              <label htmlFor="password-sigin">Senha</label>
              <input
                type="password"
                placeholder="No mínimo 6 caracteres"
                required
              />
            </div>
            <button>Entrar</button>
            <a href="#">Criar uma conta</a>
          </Form>
        </div>
      </Spacing>
    </Container>
  );
}
