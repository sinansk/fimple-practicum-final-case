import { useResult } from "../context/ResultContext";
import { useRef } from "react";
import Modal from "./Modal";
import ResultTable from "./ResultTable";
import { money } from "../utils";
const Result = () => {
  const { result } = useResult();
  const modalRef = useRef();
  return (
    <>
      <div className="bg-gray-50 dark:border-cyan-500 dark:bg-slate-700 dark:text-gray-50 border-[0.5px] flex flex-col p-3 rounded-xl border-gray-100 shadow-lg w-[90vw]  sm:w-[50vw] min-h-80 h-80">
        <h2 className="text-center text-3xl py-1">
          {`${money.format(result.loan)}  ${result.numberOfPayment}  ${
            result.paymentPeriod
          } VADELİ KREDİ`}
        </h2>
        <div className="sm:grid text-xl sm:grid-cols-3 gap-3 h-4/6">
          <div className="dark:bg-gray-600 dark:border-cyan-500 flex flex-col items-center justify-center bg-white rounded-md shadow-sm text-center border-[0.5px] border-orange-400">
            <h2 className="font-semibold">TOPLAM GERİ ÖDEME</h2>
            <p>{money.format(result?.totalPayment)}</p>
          </div>
          <div className="dark:bg-gray-600 dark:border-cyan-500 flex flex-col items-center justify-center bg-white rounded-md shadow-sm text-center border-[0.5px] border-orange-400">
            <h2 className="font-semibold">TAKSİT TUTARI</h2>
            <p>{money.format(result?.months[0]?.payment)}</p>
          </div>
          <div className="dark:bg-gray-600 dark:border-cyan-500 flex flex-col items-center justify-center bg-white rounded-md shadow-sm text-center border-[0.5px] border-orange-400">
            <h2 className="font-semibold">TOPLAM VERGİ</h2>
            <p>
              {money.format(result?.totalKkdfPayment + result.totalBsmvPayment)}
            </p>
          </div>
        </div>
        <button
          className="btn btn-primary mt-auto"
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
