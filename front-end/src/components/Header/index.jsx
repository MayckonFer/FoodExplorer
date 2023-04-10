import { FiMenu } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

import {
  Container,
  Spacing,
  OpenMenu,
  WrapperInput,
  WrapperCart,
  LogOut,
} from "./styles";

import { Button } from "../Button";
import { MenuSearch } from "../MenuSearch";
import { Input } from "../Input";

import { useContext } from "react";
import { StateContext } from "../../hooks/context";

export function Header({ imageLogo }) {
  const { menuOpen, setMenuOpen, isAdmin } = useContext(StateContext);

  return (
    <Container>
      {menuOpen ? <MenuSearch /> : ""}
      <Spacing>
        <div>
          <OpenMenu onClick={() => setMenuOpen(true)}>
            <FiMenu size={32} />
          </OpenMenu>

          <a href="#">
            <img src={imageLogo} alt="Logo Food Explorer" />
          </a>

          <WrapperInput>
            <Input
              type="text"
              placeholder="Busque por pratos ou ingredientes"
              id="search"
            >
              <label htmlFor="search">
                <AiOutlineSearch size={32} />
              </label>
            </Input>
          </WrapperInput>

          <WrapperCart>
            {isAdmin === true ? (
              <Button title="Novo prato" />
            ) : (
              <Button title="Pedidos (0)">
                <svg
                  width="27"
                  height="23"
                  viewBox="0 0 27 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 8.36639C6 7.81411 6.44772 7.36639 7 7.36639H20C20.5523 7.36639 21 7.81411 21 8.36639C21 8.91868 20.5523 9.36639 20 9.36639H7C6.44772 9.36639 6 8.91868 6 8.36639Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 12.3664C6 11.8141 6.44772 11.3664 7 11.3664H20C20.5523 11.3664 21 11.8141 21 12.3664C21 12.9187 20.5523 13.3664 20 13.3664H7C6.44772 13.3664 6 12.9187 6 12.3664Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.08579 0.952181C1.46086 0.577108 1.96957 0.366394 2.5 0.366394H24.5C25.0304 0.366394 25.5391 0.577108 25.9142 0.952181C26.2893 1.32725 26.5 1.83596 26.5 2.36639V21.3664C26.5 21.713 26.3205 22.0348 26.0257 22.217C25.7309 22.3993 25.3628 22.4158 25.0528 22.2608L21.5 20.4844L17.9472 22.2608C17.6657 22.4016 17.3343 22.4016 17.0528 22.2608L13.5 20.4844L9.94721 22.2608C9.66569 22.4016 9.33431 22.4016 9.05279 22.2608L5.5 20.4844L1.94721 22.2608C1.63723 22.4158 1.26909 22.3993 0.974269 22.217C0.679452 22.0348 0.5 21.713 0.5 21.3664V2.36639C0.5 1.83596 0.710714 1.32725 1.08579 0.952181ZM24.5 2.36639L2.5 2.36639L2.5 19.7484L5.05279 18.472C5.33431 18.3312 5.66569 18.3312 5.94721 18.472L9.5 20.2484L13.0528 18.472C13.3343 18.3312 13.6657 18.3312 13.9472 18.472L17.5 20.2484L21.0528 18.472C21.3343 18.3312 21.6657 18.3312 21.9472 18.472L24.5 19.7484V2.36639Z"
                    fill="white"
                  />
                </svg>
              </Button>
            )}
            <button>
              <svg
                width="27"
                height="23"
                viewBox="0 0 27 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 8.36639C6 7.81411 6.44772 7.36639 7 7.36639H20C20.5523 7.36639 21 7.81411 21 8.36639C21 8.91868 20.5523 9.36639 20 9.36639H7C6.44772 9.36639 6 8.91868 6 8.36639Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 12.3664C6 11.8141 6.44772 11.3664 7 11.3664H20C20.5523 11.3664 21 11.8141 21 12.3664C21 12.9187 20.5523 13.3664 20 13.3664H7C6.44772 13.3664 6 12.9187 6 12.3664Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.08579 0.952181C1.46086 0.577108 1.96957 0.366394 2.5 0.366394H24.5C25.0304 0.366394 25.5391 0.577108 25.9142 0.952181C26.2893 1.32725 26.5 1.83596 26.5 2.36639V21.3664C26.5 21.713 26.3205 22.0348 26.0257 22.217C25.7309 22.3993 25.3628 22.4158 25.0528 22.2608L21.5 20.4844L17.9472 22.2608C17.6657 22.4016 17.3343 22.4016 17.0528 22.2608L13.5 20.4844L9.94721 22.2608C9.66569 22.4016 9.33431 22.4016 9.05279 22.2608L5.5 20.4844L1.94721 22.2608C1.63723 22.4158 1.26909 22.3993 0.974269 22.217C0.679452 22.0348 0.5 21.713 0.5 21.3664V2.36639C0.5 1.83596 0.710714 1.32725 1.08579 0.952181ZM24.5 2.36639L2.5 2.36639L2.5 19.7484L5.05279 18.472C5.33431 18.3312 5.66569 18.3312 5.94721 18.472L9.5 20.2484L13.0528 18.472C13.3343 18.3312 13.6657 18.3312 13.9472 18.472L17.5 20.2484L21.0528 18.472C21.3343 18.3312 21.6657 18.3312 21.9472 18.472L24.5 19.7484V2.36639Z"
                  fill="white"
                />
              </svg>
              <span>0</span>
            </button>
          </WrapperCart>

          <LogOut>
            <FiLogOut size={32} />
          </LogOut>
        </div>
      </Spacing>
    </Container>
  );
}
