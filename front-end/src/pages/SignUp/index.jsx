import React from "react";

import { Container, Spacing, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Spacing>
        <div>
          <img src="/assets/images/logo.png" alt="Logo Food Explorer" />

          <Form>
            <legend>Crie sua conta</legend>
            <div>
              <label htmlFor="name-sigUp">Seu nome</label>
              <Input
                type="text"
                placeholder="Exemplo: Maria da Silva"
                id="name-sigUp"
                required
              />
            </div>
            <div>
              <label htmlFor="email-sigUp">E-mail</label>
              <Input
                type="email"
                placeholder="Exemplo: exemplo@exemplo.com.br"
                id="email-sigUp"
                required
              />
            </div>
            <div>
              <label htmlFor="password-signUp">Senha</label>
              <Input
                type="password"
                placeholder="No mínimo 6 caracteres"
                id="password-signUp"
                required
              />
            </div>
            <Button title="Criar conta" type="submit" />
            <a href="#">Já tenho uma conta</a>
          </Form>
        </div>
      </Spacing>
    </Container>
  );
}
