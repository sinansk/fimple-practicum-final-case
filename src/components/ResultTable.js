import React from "react";
import { money } from "../utils";
import { useResult } from "../context/ResultContext";
const ResultTable = () => {
  const { result } = useResult();
  return (
    <table className=" relative w-full text-lg text-center border-collapse divide-y table-auto divide-solid">
      <thead className="p-5 sticky top-0 text-orange-500 dark:text-cyan-400 ">
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
        {result?.months.map((taksit) => (
          <tr key={taksit.installment}>
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
    </table>
  );
};

export default ResultTable;
