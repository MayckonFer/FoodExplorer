import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import { Container, Spacing, Menu, ButtonClose } from "./styles";

import { Input } from "../Input";

export function MenuSearch() {
  return (
    <Container>
      <Menu>
        <Spacing>
          <ButtonClose>
            <AiOutlineClose size={28} />
          </ButtonClose>
          <h2>Menu</h2>
        </Spacing>
      </Menu>
      <Spacing>
        <div>
          <Input type="text" placeholder="Busque por pratos ou ingredientes">
            <AiOutlineSearch size={32} />
          </Input>

          <button>Sair</button>
        </div>
      </Spacing>
    </Container>
  );
}
