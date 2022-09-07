import React from "react";
import { paymentPeriodOptions } from "../mockData";
import { useForm } from "../context/InputContext";
const UserForm = () => {
  const { form, setForm } = useForm();
  const handleForm = (e) => {
    console.log(e.target.value);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(form);
  return (
    <form className="bg-gray-50 border-[0.5px] flex flex-col p-3 sm:grid sm:grid-cols-6 gap-3 rounded-xl border-gray-100 shadow-lg w-[90vw] h-fit sm:w-[50vw] sm:h-80 ">
      <div className="col-span-3 flex flex-col gap-2">
        <label htmlFor="">Kredi Tutarı</label>
        <div className="flex items-center relative">
          <input
            className="h-10 w-full p-1 border[0.5px] outline-orange-300 rounded-md border-gray-300"
            type="text"
            name="loan"
            placeholder="100.000"
            onChange={(e) => handleForm(e)}
          ></input>
          <p className="ml-auto absolute right-1">TL</p>
        </div>
        <label htmlFor="">Taksit Aralığı</label>
        <select
          className="h-10 w-full p-1  border[0.5px] outline-orange-300 rounded-md border-gray-300"
          id="paymentPeriodInput"
          name="paymentPeriod"
          onChange={(e) => handleForm(e)}
          onBlur={(e) => handleForm(e)}
          defaultValue="aylık"
        >
          {paymentPeriodOptions.map((item) => (
            <option className="text-left " key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label htmlFor="">Taksit Sayısı</label>
        <input
          className="h-10 w-full p-1 border[0.5px] outline-orange-300 rounded-md border-gray-300"
          type="text"
          name="paymentNumber"
          placeholder="12"
          onChange={(e) => handleForm(e)}
        ></input>
      </div>
      <div className="col-span-3 flex flex-col gap-2">
        <label htmlFor="">Faiz Oranı</label>
        <input
          className="h-10 w-full p-1 border[0.5px] outline-orange-300 rounded-md border-gray-300"
          type="text"
          name="profit"
          placeholder="%2,28"
          onChange={(e) => handleForm(e)}
        ></input>
        <label htmlFor="">KKDF</label>
        <input
          className="h-10 w-full p-1 border[0.5px] outline-orange-300 rounded-md border-gray-300"
          type="text"
          name="kkdf"
          placeholder="%15"
          onChange={(e) => handleForm(e)}
        ></input>
        <label htmlFor="">BSMV</label>
        <input
          className="h-10 w-full p-1 border[0.5px] outline-orange-300 rounded-md border-gray-300"
          type="text"
          name="bsmv"
          placeholder="%5"
          onChange={(e) => handleForm(e)}
        ></input>
      </div>
      <button className="btn bg-orange-500/90 hover:bg-orange-500/80 text-gray-50 font-semibold h-10 col-span-6 rounded-md">
        HESAPLA
      </button>
    </form>
  );
};

export default UserForm;
