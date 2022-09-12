import { useState } from "react";
import { useResult } from "../context/ResultContext";
import { money } from "../utils";
const TableModal = () => {
  const { result, setResult } = useResult();
  console.log(result, "result");
  const [isModalOpen, setIsModelOpen] = useState(true);

  const handleModal = () => {
    setIsModelOpen((prev) => !prev);
  };

  return (
    <div
      className={`${
        !isModalOpen && `hidden`
      } p-10 my-10 w-[90vw] z-50 h-full relative rounded-md border-[0.5px] bg-white dark:bg-gray-700 dark:text-slate-200 border-gray-50 shadow-lg mx-auto`}
    >
      <button
        onClick={handleModal}
        className="btn rounded-full px-2.5 py-1 border-[1px] border-orange-400 dark:border-cyan-400 text-white bg-orange-500/90 dark:bg-cyan-500/90 dark:hover:bg-cyan-500/80 hover:bg-orange-500/80 border-orange-500-70 hover:text-white absolute  top-3 right-3"
      >
        X
      </button>
      <table className="w-full text-lg text-center border-collapse divide-y table-auto divide-solid">
        <thead className="text-orange-500 dark:text-cyan-400">
          <tr>
            <th>Taksit No</th>
            <th>Taksit Tutarı</th>
            <th>Ana Para</th>
            <th>Kalan Ana Para</th>
            <th>Kar Tutarı</th>
            <th>KKDF</th>
            <th>BSMV</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-solid">
          {result?.map((taksit) => (
            <tr key={taksit.installment}>
              <td>{taksit?.installment}</td>
              <td>{taksit?.payment}</td>
              <td>{taksit?.principal}</td>
              <td>{taksit?.remainPrincipal}</td>
              <td>{taksit?.interestPayment}</td>
              <td>{taksit?.kkdf}</td>
              <td>{taksit?.bsmv}</td>
            </tr>
          ))}
          {/* <tr>
            <td>1</td>
            <td>9.956,46 TL</td>
            <td>7.106,46 TL</td>
            <td>92.893,54</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956,46 TL</td>
            <td>7.106,46 TL</td>
            <td>92.893,54</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default TableModal;
