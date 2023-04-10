import React from "react";

import { Container, Spacing, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Spacing>
        <div>
          <img src="/assets/images/logo.png" alt="Logo Food Explorer" />

          <Form>
            <legend>Faça login</legend>
            <div>
              <label htmlFor="email-sigin">E-mail</label>
              <Input
                type="email"
                placeholder="Exemplo: exemplo@exemplo.com.br"
                required
              />
            </div>
            <div>
              <label htmlFor="password-sigin">Senha</label>
              <Input
                type="password"
                placeholder="No mínimo 6 caracteres"
                required
              />
            </div>
            <Button title="Entrar" type="submit" />
            <a href="#">Criar uma conta</a>
          </Form>
        </div>
      </Spacing>
    </Container>
  );
}
