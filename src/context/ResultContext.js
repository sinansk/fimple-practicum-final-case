import { createContext, useState, useContext } from "react";

const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const defaultValues = {
    months: [],
    paymentPeriod: "",
    numberOfPayment: "",
    loan: "",
    payment: "",
    totalPayment: "",
    totalInterestPayment: "",
    totalKkdfPayment: "",
    totalBsmvPayment: "",
  };
  const [result, setResult] = useState(defaultValues);

  const values = {
    result,
    setResult,
  };

  return (
    <ResultContext.Provider value={values}>{children}</ResultContext.Provider>
  );
};
export const useResult = () => useContext(ResultContext);
