import { useState } from "react";
import { AuthContext } from "../context";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getRandomToken } from "../utils";

const AuthProvider = ({ children }) => {
  const [regData, setRegData] = useLocalStorage("registerData", []);
  const [loginData, setLoginData] = useLocalStorage("loginData", {});
  const [showNav, setShowNav] = useState(true);

  const saveRegisterData = (formData) => {
    setRegData([...regData, formData]);
  };

  const saveLoginData = (formData) => {
    setLoginData({
      ...formData,
      authToken: getRandomToken(),
    });
  };

  const removeLoginData = () => {
    setLoginData({});
  };

  return (
    <AuthContext.Provider
      value={{
        saveRegisterData,
        saveLoginData,
        removeLoginData,
        showNav,
        setShowNav,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;