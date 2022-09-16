import { useResult } from "../context/ResultContext";
import { money } from "../utils";
import React from "react";

const ResultTable = () => {
  const { result } = useResult();
  return (
    <table className="w-full h-full p-5 text-lg text-center border-collapse table-auto divide-solid 2xl:text-2xl">
      <thead className="sticky top-0 left-0 w-full p-5 mr-5 text-orange-500 bg-white border-b-2 dark:text-cyan-400 dark:bg-gray-700 ">
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
        <tr className="sticky bottom-0 left-0 right-0 w-full min-w-full text-lg font-semibold text-orange-500 bg-gray-100 2xl:text-2xl dark:bg-slate-800 dark:text-cyan-400">
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
