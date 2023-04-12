import { createContext, useContext, useState } from "react";
const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
const useLogin = () => {
  return useContext(LoginContext);
};
export { LoginProvider, useLogin, LoginContext };