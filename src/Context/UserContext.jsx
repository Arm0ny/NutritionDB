import { React, createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UUID, setUUID] = useState("");
  const [isLogged, setLogged] = useState(false);
  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        UUID,
        setUUID,
        isLogged,
        setLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
