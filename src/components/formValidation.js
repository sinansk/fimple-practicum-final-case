import * as Yup from "yup";

const validations = Yup.object().shape({
  loan: Yup.number().positive().min(1).required("Lütfen kredi tutarı giriniz"),
  paymentPeriod: Yup.number()
    .positive()
    .required("Lütfen taksit aralığı seçiniz.")
    .oneOf([0.25, 1, 12])
    .label("Taksit Aralığı"),
  paymentNumber: Yup.number()
    .positive()
    .required("Lütfen taksit sayısı giriniz."),
  interest: Yup.number().positive().required("Lütfen faiz oranı giriniz"),
  kkdf: Yup.number().required("Lütfen kkdf oranı giriniz."),
  bsmv: Yup.number().required("Lütfen bsmv oranı giriniz."),
});

export default validations;
