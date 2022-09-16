import * as Yup from "yup";

const validations = Yup.object().shape({
  loan: Yup.string().required("Lütfen kredi tutarı giriniz"),
  paymentPeriod: Yup.number()
    .positive("Lütfen pozitif bir değer giriniz.")
    .required("Lütfen taksit aralığı seçiniz.")
    .oneOf([7 / 30, 1, 365 / 30])
    .label("Taksit Aralığı"),
  paymentNumber: Yup.number()
    .positive("Lütfen pozitif bir değer giriniz.")
    .required("Lütfen taksit sayısı giriniz."),
  interest: Yup.number()
    .positive("Lütfen pozitif bir değer giriniz.")
    .required("Lütfen faiz oranı giriniz"),
  kkdf: Yup.number()
    .min(0, "0 veya daha büyük olmalı.")
    .required("Lütfen kkdf oranı giriniz."),
  bsmv: Yup.number()
    .min(0, "0 veya daha büyük olmalı.")
    .required("Lütfen bsmv oranı giriniz."),
});

export default validations;
