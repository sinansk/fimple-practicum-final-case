import { useResult } from "../context/ResultContext";
import ResultTable from "./ResultTable";
import { money } from "../utils";
import { useRef } from "react";
import Modal from "./Modal";

const Result = () => {
  const { result } = useResult();
  const modalRef = useRef();

  return (
    <>
      <div className="bg-gray-50 dark:border-cyan-500 dark:bg-slate-700 dark:text-gray-50 border-[0.5px] flex flex-col p-3 rounded-xl border-gray-100 shadow-lg w-[90vw] sm:w-[50vw] 2xl:h-[44vh] sm:h-[50vh]">
        <h2 className="py-1 text-3xl text-center">
          {`${money.format(result.loan)}  ${result.numberOfPayment}  ${
            result.paymentPeriod
          } VADELİ KREDİ`}
        </h2>
        <div className="gap-3 text-xl sm:grid sm:grid-cols-3 h-4/6">
          <div className="result-small-container">
            <h2 className="font-semibold">TOPLAM GERİ ÖDEME</h2>
            <p>{money.format(result?.totalPayment)}</p>
          </div>
          <div className="result-small-container">
            <h2 className="font-semibold">TAKSİT TUTARI</h2>
            <p>{money.format(result?.payments[0]?.payment)}</p>
          </div>
          <div className="result-small-container">
            <h2 className="font-semibold">TOPLAM VERGİ</h2>
            <p>
              {money.format(result?.totalKkdfPayment + result.totalBsmvPayment)}
            </p>
          </div>
        </div>
        <button
          className="mt-auto btn btn-primary"
          onClick={() => modalRef.current.openModal()}
        >
          ÖDEME PLANINI GÖSTER
        </button>
      </div>
      <Modal ref={modalRef}>
        <ResultTable />
      </Modal>
    </>
  );
};

export default Result;
