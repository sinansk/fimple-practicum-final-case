import React, { useEffect } from "react";
import { paymentPeriodOptions } from "../mockData";
import { useForm } from "../context/FormContext";
import { useResult } from "../context/ResultContext";
import { useNavigate } from "react-router-dom";
const UserForm = () => {
  const { form, setForm } = useForm();
  const navigate = useNavigate();
  const { result, setResult } = useResult();
  const handleForm = (e) => {
    console.log(e.target.value);
    setForm((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) }));
  };
  console.log(form);

  const calculateLoan = (e) => {
    e.preventDefault();

    console.log(form.profit.toFixed(2));

    let time = form.paymentNumber;
    let loan = form.loan;
    let taksit = 1;
    let kalanAnapara = form.loan;
    let profitInterest = (form.profit / 100) * form.paymentPeriod;
    let newFaiz =
      ((form.profit +
        (form.profit * form.kkdf) / 100 +
        (form.profit * form.bsmv) / 100) *
        form.paymentPeriod) /
      100;
    for (let time = form.paymentNumber; time > 0; time--) {
      let resultModal = {
        taksit: "",
        aylıkFaiz: "",
        aylıkÖdeme: "",
        aylıkKkdf: "",
        aylıkBsmv: "",
        aylıkAnaPara: "",
        kalanAnaPara: "",
      };
      console.log(typeof taksit);
      let time2 = time - 1;
      console.log(time2);

      console.log(kalanAnapara, "kalanAnapara");
      const x = Math.pow(1 + newFaiz, time);
      console.log(profitInterest, "profitInterest");
      console.log(x);
      const monthlyProfit = (kalanAnapara * newFaiz) / (1 - 1 / x);
      console.log(monthlyProfit);
      resultModal.aylıkÖdeme = monthlyProfit;
      let aylıkFaiz = profitInterest * kalanAnapara;
      resultModal.aylıkFaiz = aylıkFaiz;
      console.log("faiz:", aylıkFaiz);
      const kkdf = (aylıkFaiz * 15) / 100;
      resultModal.aylıkKkdf = kkdf;
      const bsmv = (aylıkFaiz * 5) / 100;
      resultModal.aylıkBsmv = bsmv;
      const newPayment = monthlyProfit + kkdf + bsmv;

      console.log("newPayment:", newPayment);
      const aylıkAnaPara = monthlyProfit - aylıkFaiz - kkdf - bsmv;
      resultModal.aylıkAnaPara = aylıkAnaPara;
      console.log("firstAna:", aylıkAnaPara);
      kalanAnapara -= aylıkAnaPara;
      resultModal.kalanAnaPara = kalanAnapara;
      aylıkFaiz = profitInterest * kalanAnapara;
      console.log("kalanAna:", kalanAnapara.toFixed(3));
      resultModal.taksit = taksit;

      taksit += 1;
      console.log(taksit);
      time2 -= 1;
      result.push(resultModal);
    }

    navigate("/result", { replace: true });
  };

  // let data = {
  //   monthylyFaiz: [],
  //   monthlyAnaPara: [],
  //   monthlyÖdeme: [],
  //   monthlyKkdf: [],
  //   monthlyBsmv: [],
  //   kalanAnaPara: [],
  // };
  // const calculateLoan = (e) => {
  //   e.preventDefault();

  //   console.log(form.profit.toFixed(2));

  //   let time = form.paymentNumber;
  //   let loan = form.loan;
  //   let kalanAnapara = form.loan;
  //   let profitInterest = form.profit / 100;
  //   for (let time = form.paymentNumber; time > 0; time--) {
  //     console.log(kalanAnapara, "kalanAnapara");
  //     let x = Math.pow(1 + profitInterest, time);
  //     console.log(profitInterest, "profitInterest");
  //     console.log(x);
  //     const monthlyProfit = (kalanAnapara * profitInterest) / (1 - 1 / x);
  //     console.log(monthlyProfit);
  //     data.monthlyÖdeme.push(monthlyProfit);
  //     let aylıkFaiz = profitInterest * kalanAnapara;
  //     data.monthylyFaiz.push(aylıkFaiz);
  //     console.log("faiz:", aylıkFaiz);
  //     const kkdf = (aylıkFaiz * 15) / 100;
  //     data.monthlyKkdf.push(kkdf);
  //     const bsmv = (aylıkFaiz * 10) / 100;
  //     data.monthlyBsmv.push(bsmv);
  //     const newPayment = monthlyProfit + kkdf + bsmv;

  //     console.log("newPayment:", newPayment);
  //     const aylıkAnaPara = monthlyProfit - aylıkFaiz;
  //     data.monthlyAnaPara.push(aylıkAnaPara);
  //     console.log("firstAna:", aylıkAnaPara);
  //     kalanAnapara -= aylıkAnaPara;
  //     data.kalanAnaPara.push(kalanAnapara);
  //     aylıkFaiz = profitInterest * kalanAnapara;
  //     console.log("kalanAna:", kalanAnapara.toFixed(3));

  //     console.log("data", data);
  //   }
  //   setResult(data);

  // };

  // useEffect(() => {
  //   navigate("/result", { replace: true });
  // }, [result]);
  return (
    <form
      onSubmit={(e) => calculateLoan(e)}
      className="bg-gray-50 border-[0.5px] flex flex-col p-3 sm:grid sm:grid-cols-6 gap-3 rounded-xl border-gray-100 shadow-lg w-[90vw] h-fit sm:w-[50vw] sm:h-[50vh] "
    >
      <div className="flex flex-col col-span-3 gap-2 ">
        <label htmlFor="">Kredi Tutarı</label>
        <div className="relative flex items-center">
          <input
            className="h-10 2xl:h-12  w-full p-1 border[0.5px] outline-orange-300 rounded-md border-gray-300"
            type="text"
            name="loan"
            placeholder="100.000"
            onChange={(e) => handleForm(e)}
          ></input>
          <p className="absolute ml-auto right-1">TL</p>
        </div>
        <label htmlFor="">Taksit Aralığı</label>
        <select
          className="h-10 2xl:h-12  w-full p-1  border[0.5px] outline-orange-300 rounded-md border-gray-300"
          id="paymentPeriodInput"
          name="paymentPeriod"
          onChange={(e) => handleForm(e)}
          onBlur={(e) => handleForm(e)}
          defaultValue="1"
        >
          {paymentPeriodOptions.map((item, i) => (
            <option
              className="text-left "
              key={i}
              selected={i === 1}
              value={item.value}
              onChange={(e) => handleForm(e)}
              onBlur={(e) => handleForm(e)}
            >
              {item.name}
            </option>
          ))}
        </select>
        <label htmlFor="">Taksit Sayısı</label>
        <input
          className="h-10 2xl:h-12  w-full p-1 border[0.5px] outline-orange-300 rounded-md border-gray-300"
          type="text"
          name="paymentNumber"
          placeholder="12"
          onChange={(e) => handleForm(e)}
        ></input>
      </div>
      <div className="flex flex-col flex-1 col-span-3 gap-2">
        <label htmlFor="">Faiz Oranı</label>
        <input
          className="h-10 2xl:h-12 w-full p-1 border[0.5px] outline-orange-300 rounded-md border-gray-300"
          type="text"
          name="profit"
          placeholder="%2,28"
          onChange={(e) => handleForm(e)}
        ></input>
        <label htmlFor="">KKDF</label>
        <input
          className="h-10 2xl:h-12  w-full p-1 border[0.5px] outline-orange-300 rounded-md border-gray-300"
          type="text"
          name="kkdf"
          placeholder="%15"
          onChange={(e) => handleForm(e)}
        ></input>
        <label htmlFor="">BSMV</label>
        <input
          className="h-10 2xl:h-12  w-full p-1 border[0.5px] outline-orange-300 rounded-md border-gray-300"
          type="text"
          name="bsmv"
          placeholder="%5"
          onChange={(e) => handleForm(e)}
        ></input>
      </div>
      <button className="h-10 col-span-6 font-semibold rounded-md btn bg-orange-500/90 hover:bg-orange-500/80 text-gray-50 2xl:h-12">
        HESAPLA
      </button>
    </form>
  );
};

export default UserForm;
