import { createContext, useState, useEffect, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const defaultFormValues = {
    loan: 0,
    paymentPeriod: 0,
    paymentNumber: 0,
    interest: 0,
    kkdf: 0,
    bsmv: 0,
  };

  const [form, setForm] = useState(defaultFormValues);
  const values = {
    form,
    setForm,
  };
  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

export const useForm = () => useContext(FormContext);
