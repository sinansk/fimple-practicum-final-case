import { useResult } from "../context/ResultContext";
import { money } from "../utils/moneyFormat";
import ResultTable from "./ResultTable";
import { useRef } from "react";
import Modal from "./Modal";

const Result = () => {
  const { result } = useResult();
  const modalRef = useRef();

  return (
    <>
      <div
        data-testid="result"
        className="bg-gray-50 dark:border-cyan-500 dark:bg-slate-700 dark:text-gray-50 border-[0.5px] flex flex-col p-3 rounded-xl border-gray-100 shadow-lg w-[90vw] lg:w-[50vw] "
      >
        <h2 className="py-1 text-3xl text-center">
          {`${money.format(result.loan)}  ${result.numberOfPayment}  ${
            result.paymentPeriod
          } VADELİ KREDİ`}
        </h2>
        <div className="flex flex-col gap-3 mb-2 text-xl 2xl:text-2xl sm:h-48 2xl:h-60 sm:grid sm:grid-cols-3">
          <div className="result-small-container">
            <h2 className="font-semibold ">TOPLAM GERİ ÖDEME</h2>
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
          data-testid="resultButton"
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
