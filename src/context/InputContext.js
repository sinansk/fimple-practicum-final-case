import { createContext, useState, useEffect, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const defaultFormValues = {
    loan: "",
    paymentPeriod: "",
    paymentNumber: "",
    profit: "",
    kkdf: "",
    bsmv: "",
  };

  const [form, setForm] = useState(defaultFormValues);
  const values = {
    form,
    setForm,
  };
  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

export const useForm = () => useContext(FormContext);
