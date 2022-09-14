import React from "react";
import { money } from "../utils";
import { useResult } from "../context/ResultContext";
const ResultTable = () => {
  const { result } = useResult();
  return (
    <table className="p-5 h-full w-full text-lg text-center border-collapse table-auto divide-solid">
      <thead className="p-5 sticky top-0 left-0 mr-5 w-full text-orange-500 dark:text-cyan-400 border-b-2 bg-white dark:bg-gray-700 ">
        <tr>
          <th>Taksit No</th>
          <th>Taksit Tutarı</th>
          <th>Ana Para</th>
          <th>Kalan Ana Para</th>
          <th>Kar Tutarı</th>
          <th>KKDF</th>
          <th className="pr-5">BSMV</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-solid">
        {result?.months.map((taksit) => (
          <tr
            className="odd:bg-gray-100 dark:odd:bg-gray-500"
            key={taksit.installment}
          >
            <td>{taksit?.installment}</td>
            <td>{money.format(taksit?.payment)}</td>
            <td>{money.format(taksit?.principal)}</td>
            <td>{money.format(taksit?.remainPrincipal)}</td>
            <td>{money.format(taksit?.interestPayment)}</td>
            <td>{money.format(taksit?.kkdf)}</td>
            <td>{money.format(taksit?.bsmv)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className=" bg-gray-100 min-w-full w-full text-lg font-semibold dark:bg-slate-800 sticky bottom-0 left-0 right-0  text-orange-500 dark:text-cyan-400 ">
          <td>TOPLAM</td>
          <td>{money.format(result?.totalPayment)}</td>
          <td>{money.format(result?.loan)}</td>
          <td>-</td>
          <td>{money.format(result?.totalInterestPayment)}</td>
          <td>{money.format(result?.totalKkdfPayment)}</td>
          <td>{money.format(result?.totalBsmvPayment)}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ResultTable;
