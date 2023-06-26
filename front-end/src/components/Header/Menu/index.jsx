import { useContext } from "react";
import { ContextState } from "../../../Context/ContextStates";
import { Input } from "../../Input";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { ContainerMenuHeader, HeaderMenu, ContentMenu } from "./styles";

export function Menu() {
  const { handleCloseMenu } = useContext(ContextState);

  return (
    <ContainerMenuHeader>
      <HeaderMenu>
        <div>
          <button title="Fechar menu" onClick={() => handleCloseMenu()}>
            <AiOutlineClose size={32} color="#fff" />
          </button>
          <h2>Menu</h2>
        </div>
      </HeaderMenu>
      <div>
        <ContentMenu>
          <Input
            icon={AiOutlineSearch}
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />

          <button title="Sair" onClick={() => handleCloseMenu()}>
            <span>Sair</span>
          </button>
        </ContentMenu>
      </div>
    </ContainerMenuHeader>
  );
}
