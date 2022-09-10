import { createContext, useState, useContext } from "react";

const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const values = {
    result,
    setResult,
  };

  return (
    <ResultContext.Provider value={values}>{children}</ResultContext.Provider>
  );
};
export const useResult = () => useContext(ResultContext);
