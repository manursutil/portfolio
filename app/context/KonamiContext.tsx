"use client";

import { createContext, useContext, useState } from "react";

const KonamiContext = createContext<{
  active: boolean;
  activate: () => void;
}>({
  active: false,
  activate: () => {},
});

export const KonamiProvider = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(false);

  return (
    <KonamiContext.Provider value={{ active, activate: () => setActive(true) }}>
      {children}
    </KonamiContext.Provider>
  );
};

export const useKonami = () => useContext(KonamiContext);
