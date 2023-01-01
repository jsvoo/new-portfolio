import { createContext, useState } from "react";

export const contextManager = createContext();
export default function PortfolioContext({ children }) {
  const [initial, setinitial] = useState({
    home: false,
    about: false,
    portfolio: false,
    contact: false,
    light_mode: false
  });
  const [clicked, setClicked] = useState({ ...initial, home: true });

  const exportData = {
    initial,
    setinitial,
    clicked,
    setClicked
  };
  return (
    <contextManager.Provider value={exportData}>
      {children}
    </contextManager.Provider>
  );
}
