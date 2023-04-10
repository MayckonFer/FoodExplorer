import { createContext, useState } from "react";

export const StateContext = createContext({});

export function IndexContext({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <StateContext.Provider
      value={{ menuOpen, setMenuOpen, isAdmin, setIsAdmin }}
    >
      {children}
    </StateContext.Provider>
  );
}
