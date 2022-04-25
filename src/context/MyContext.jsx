import { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <MyContext.Provider
      value={{ title, description, setDescription, setTitle }}
    >
      {children}
    </MyContext.Provider>
  );
};
