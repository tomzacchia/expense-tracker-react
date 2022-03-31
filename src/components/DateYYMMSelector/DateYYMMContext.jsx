import { useState, useContext, createContext } from "react";

export const DateYYMMContext = createContext();

export function DateYYMMProvider({ children }) {
  const [dateYYMM, setDateYYMM] = useState(new Date());

  function setDate(date) {
    setDateYYMM(date);
  }

  const value = { date: dateYYMM, setDate };

  return (
    <DateYYMMContext.Provider value={value}>
      {children}
    </DateYYMMContext.Provider>
  );
}

export function useDateYYMMContext() {
  return useContext(DateYYMMContext);
}
