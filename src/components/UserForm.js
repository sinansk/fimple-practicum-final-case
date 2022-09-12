import { paymentPeriodOptions } from "../mockData";
import { useResult } from "../context/ResultContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validations from "./formValidation";
import { money } from "../utils";
const UserForm = () => {
  const navigate = useNavigate();
  const { setResult } = useResult();

  const calculateLoan = (values) => {
    // e.preventDefault();
    console.log(values);
    let installment = 1;
    let remainPrincipal = values.loan;
    let interestRate = (values.interest / 100) * values.paymentPeriod;
    let totalRate =
      ((values.interest +
        (values.interest * values.kkdf) / 100 +
        (values.interest * values.bsmv) / 100) *
        values.paymentPeriod) /
      100;
    let data = [];
    for (
      let paymentNumber = values.paymentNumber;
      paymentNumber > 0;
      paymentNumber--
    ) {
      let resultModal = {
        installment: "",
        interestPayment: "",
        payment: "",
        kkdf: "",
        bsmv: "",
        principal: "",
        remainPrincipal: "",
      };

      const x = Math.pow(1 + totalRate, paymentNumber);
      const payment = (remainPrincipal * totalRate) / (1 - 1 / x);
      resultModal.payment = money.format(Math.round(payment));
      let interestPayment = interestRate * remainPrincipal;
      resultModal.interestPayment = money.format(Math.round(interestPayment));
      const kkdf = (interestPayment * values.kkdf) / 100;
      resultModal.kkdf = money.format(Math.round(kkdf));
      const bsmv = (interestPayment * values.bsmv) / 100;
      resultModal.bsmv = money.format(Math.round(bsmv));
      const principal = payment - interestPayment - kkdf - bsmv;
      resultModal.principal = money.format(Math.round(principal));
      remainPrincipal -= principal;
      resultModal.remainPrincipal = money.format(Math.round(remainPrincipal));
      interestPayment = interestRate * remainPrincipal;
      resultModal.installment = installment;
      installment += 1;
      data.push(resultModal);
      setResult(data);
    }
    navigate("/result", { replace: true });
  };

  return (
    <div>
      <Formik
        initialValues={{
          loan: "",
          paymentPeriod: 1,
          paymentNumber: "",
          interest: "",
          kkdf: "",
          bsmv: "",
        }}
        validationSchema={validations}
        initialStatus={{
          sent: "nope",
        }}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          calculateLoan(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form className="bg-gray-50 dark:bg-slate-700  border-[0.5px] flex flex-col p-3 sm:grid sm:grid-cols-6 gap-3 rounded-xl border-gray-100 shadow-lg w-[90vw] h-fit sm:w-[50vw] sm:h-[50vh] ">
            <div className="flex flex-col col-span-3 gap-2 ">
              <label htmlFor="loan" className="dark:text-gray-50">
                {errors.loan && touched.loan ? (
                  <ErrorMessage
                    component="div"
                    className="text-red-400 "
                    name="loan"
                  />
                ) : (
                  `Kredi Tutarı`
                )}
              </label>
              <div className="relative flex items-center">
                <Field
                  className={`${
                    errors.loan && touched.loan && "border-2 border-red-400"
                  } h-10 2xl:h-12 w-full p-1 outline-orange-300 dark:outline-green-500 rounded-md `}
                  type="number"
                  name="loan"
                  placeholder="100.000"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.loan}
                />

                <p className="absolute ml-auto right-1">TL</p>
              </div>

              <label htmlFor="paymentPeriod" className="dark:text-gray-50">
                {errors.paymentPeriod && touched.paymentPeriod ? (
                  <ErrorMessage
                    component="div"
                    className="text-red-400 "
                    name="paymentPeriod"
                  />
                ) : (
                  `Taksit Aralığı`
                )}
              </label>
              <Field
                as="select"
                className={`${
                  errors.paymentPeriod &&
                  touched.paymentPeriod &&
                  "border-2 border-red-400"
                } h-10 2xl:h-12  w-full p-1 outline-orange-300 dark:outline-green-500 rounded-md `}
                id="paymentPeriodInput"
                name="paymentPeriod"
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.paymentPeriod}
                defaultValue={0.25}
              >
                {paymentPeriodOptions.map((item, i) => (
                  <option
                    className="text-left "
                    key={i}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={item.value}
                  >
                    {item.name}
                  </option>
                ))}
              </Field>
              <label htmlFor="paymentNumber" className="dark:text-gray-50">
                {errors.paymentNumber && touched.paymentNumber ? (
                  <ErrorMessage
                    component="div"
                    className="text-red-400 "
                    name="paymentNumber"
                  />
                ) : (
                  `Taksit Sayısı`
                )}
              </label>
              <Field
                className={`${
                  errors.paymentNumber &&
                  touched.paymentNumber &&
                  "border-2 border-red-400"
                } h-10 2xl:h-12  w-full p-1 outline-orange-300 dark:outline-green-500 rounded-md `}
                type="number"
                name="paymentNumber"
                placeholder="12"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.paymentNumber}
              />
            </div>
            <div className="flex flex-col flex-1 col-span-3 gap-2">
              <label htmlFor="interest" className="dark:text-gray-50">
                {errors.interest && touched.interest ? (
                  <ErrorMessage
                    component="div"
                    className="text-red-400 "
                    name="interest"
                  />
                ) : (
                  `Faiz Oranı`
                )}
              </label>
              <Field
                className={`${
                  errors.interest &&
                  touched.interest &&
                  "border-2 border-red-400"
                } h-10 2xl:h-12 w-full p-1 outline-orange-300 dark:outline-green-500 rounded-md `}
                type="number"
                name="interest"
                placeholder="%2,28"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.interest}
              />
              <label htmlFor="kkdf" className="dark:text-gray-50">
                {errors.kkdf && touched.kkdf ? (
                  <ErrorMessage
                    component="div"
                    className="text-red-400 "
                    name="kkdf"
                  />
                ) : (
                  `Kkdf`
                )}
              </label>
              <Field
                className={`${
                  errors.kkdf && touched.kkdf && "border-2 border-red-400"
                } h-10 2xl:h-12  w-full p-1 outline-orange-300 dark:outline-green-500 rounded-md `}
                type="number"
                name="kkdf"
                placeholder="%15"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.kkdf}
              />
              <label htmlFor="bsmv" className="dark:text-gray-50">
                {errors.bsmv && touched.bsmv ? (
                  <ErrorMessage
                    component="div"
                    className="text-red-400 "
                    name="bsmv"
                  />
                ) : (
                  `Bsmv`
                )}
              </label>
              <Field
                className={`${
                  errors.bsmv && touched.bsmv && "border-2 border-red-400"
                } h-10 2xl:h-12  w-full p-1 outline-orange-300 dark:outline-green-500 rounded-md `}
                type="number"
                name="bsmv"
                placeholder="%5"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bsmv}
              />
            </div>
            <button
              type="submit"
              className="h-10 col-span-6 font-semibold dark:bg-cyan-500 rounded-md btn bg-orange-500/90 hover:bg-orange-500/80 text-gray-50 2xl:h-12"
            >
              HESAPLA
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
