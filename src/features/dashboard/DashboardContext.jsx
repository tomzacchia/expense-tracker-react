import { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = createContext();

export function DashboardContextProvider({ children }) {
  const [dateYYMM, setDateYYMM] = useState(new Date());

  function setDate(date) {
    setDateYYMM(date);
  }

  const value = { date: dateYYMM, setDate };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useDashboardContext() {
  return useContext(AuthContext);
}
