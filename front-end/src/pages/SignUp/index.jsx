import { ContainerSignUp, ContainerForm } from "./styles";

import logo from "/assets/images/logo.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <ContainerSignUp>
      <img src={logo} alt="" />

      <ContainerForm>
        <legend>Crie sua conta</legend>

        <div>
          <label htmlFor="name">Seu nome</label>
          <Input type="text" id="name" placeholder="Exemplo: Maria da Silva" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            id="password"
            placeholder="No mínimo 6 caracteres"
          />
        </div>

        <Button title="Entrar" />

        <a href="#">Criar uma conta</a>
      </ContainerForm>
    </ContainerSignUp>
  );
}
