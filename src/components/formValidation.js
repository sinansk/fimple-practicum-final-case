import * as Yup from "yup";

const validations = Yup.object().shape({
  loan: Yup.number()
    .positive("Lütfen pozitif bir değer giriniz.")
    .min(1000, "Lütfen 1000 lira ve üzeri bir değer giriniz.")
    .required("Lütfen kredi tutarı giriniz"),
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
  kkdf: Yup.number().required("Lütfen kkdf oranı giriniz."),
  bsmv: Yup.number().required("Lütfen bsmv oranı giriniz."),
});

export default validations;
