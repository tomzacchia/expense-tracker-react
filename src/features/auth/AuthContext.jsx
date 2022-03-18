import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "~/utils/firebase";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUser(user);
          localStorage.setItem("signedIn", "true");
        } else {
          setUser(null);
          localStorage.removeItem("signedIn");
        }
      },
      setError
    );
    return () => unsubscribe();
  }, []);
  return <AuthContext.Provider value={{ user, error }} {...props} />;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
