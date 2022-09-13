import { useResult } from "../context/ResultContext";
import { useRef } from "react";
import Modal from "./Modal";
import ResultTable from "./ResultTable";
const Result = () => {
  const { result } = useResult();
  const modalRef = useRef();
  return (
    <>
      <div className="bg-gray-50 dark:border-cyan-500 dark:bg-slate-700 dark:text-gray-50 border-[0.5px] flex flex-col  p-3 text-xl rounded-xl border-gray-100 shadow-lg w-[90vw] h-fit sm:w-[50vw] sm:h-80 ">
        <div className="sm:grid sm:grid-cols-3 gap-3 h-4/6">
          <div className="dark:bg-gray-600 dark:border-cyan-500 flex flex-col items-center justify-center bg-white rounded-md shadow-sm text-center border-[0.5px] border-orange-400">
            <h2 className="font-semibold">TOPLAM GERİ ÖDEME</h2>
            <p>{result?.totalPayment} TL</p>
          </div>
          <div className="dark:bg-gray-600 dark:border-cyan-500 flex flex-col items-center justify-center bg-white rounded-md shadow-sm text-center border-[0.5px] border-orange-400">
            <h2 className="font-semibold">AYLIK TAKSİT</h2>
            <p>{result?.months[0]?.payment} TL</p>
          </div>
          <div className="dark:bg-gray-600 dark:border-cyan-500 flex flex-col items-center justify-center bg-white rounded-md shadow-sm text-center border-[0.5px] border-orange-400">
            <h2 className="font-semibold">TOPLAM VERGİ</h2>
            <p>{result?.totalTaxPayment} TL</p>
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
