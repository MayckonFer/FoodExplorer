/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ContextState = createContext({});

export function ContextProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(true);
  }

  function handleCloseMenu() {
    setOpenMenu(false);
  }

  return (
    <ContextState.Provider
      value={{ openMenu, handleOpenMenu, handleCloseMenu }}
    >
      {children}
    </ContextState.Provider>
  );
}
