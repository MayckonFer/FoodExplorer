/* eslint-disable react/jsx-no-duplicate-props */
import { ContainerHeader, ContainerDesktop, ContainerMobile } from "./styles";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegListAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import logo from "/assets/images/logo.png";

import { Input } from "../Input";
import { Button } from "../Button";
import { Menu } from "./Menu";

import { useContext } from "react";
import { ContextState } from "../../Context/ContextStates";

export function Header() {
  const { openMenu, handleOpenMenu } = useContext(ContextState);

  return (
    <>
      <ContainerHeader>
        <div>
          <ContainerMobile>
            <button onClick={() => handleOpenMenu()} title="Abrir menu">
              <GiHamburgerMenu size={32} color="#fff" />
            </button>

            <img src={logo} alt="" />

            <button title="Pedidos">
              <FaRegListAlt size={32} color="#fff" />
              <span>0</span>
            </button>

            {openMenu === true ? <Menu /> : ""}
          </ContainerMobile>

          <ContainerDesktop>
            <img src={logo} alt="" />

            <Input
              icon={AiOutlineSearch}
              placeholder="Busque por pratos ou ingredientes"
            />

            <Button title={`Pedidos (0)`}>
              <FaRegListAlt size={32} color="#fff" />
            </Button>

            <button title="Sair">
              <FiLogOut size={32} color="#fff" />
            </button>
          </ContainerDesktop>
        </div>
      </ContainerHeader>
    </>
  );
}
