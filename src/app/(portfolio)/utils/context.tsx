"use client";

import { createContext, useContext, useState } from "react";

interface ContextProps {
  openList: string[];
  setOpenList: (value: string[]) => void;
  minimisedList: string[];
  setMinimisedList: (value: string[]) => void;
  active: string;
  setActive: (value: string) => void;
}

const AppContext = createContext<ContextProps>({} as ContextProps);

const AppContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [openList, setOpenList] = useState<string[]>([]);
  const [minimisedList, setMinimisedList,] = useState<string[]>([]);
  const [active, setActive] = useState<string>("");


  return (
    <AppContext.Provider
      value={{
        openList,
        setOpenList,
        minimisedList,
        setMinimisedList,
        active,
        setActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
