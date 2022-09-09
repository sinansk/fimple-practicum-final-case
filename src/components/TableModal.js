import { useState } from "react";
import { useResult } from "../context/ResultContext";
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
      } p-10 my-10 w-[90vw] h-[calc(100vh-8rem] relative rounded-md border-[0.5px] bg-white border-gray-50 shadow-lg mx-auto`}
    >
      <button
        onClick={handleModal}
        className="btn rounded-full px-2.5 py-1 border-[1px] border-orange-400 text-white bg-orange-500/90 hover:bg-orange-500/80 border-orange-500-70 hover:text-white absolute top-3 right-3"
      >
        X
      </button>
      <table className="table-auto text-lg w-full text-center border-collapse divide-y divide-solid">
        <thead>
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
            <tr>
              <td>{Math.round(taksit?.taksit)}</td>
              <td>{Math.round(taksit?.aylıkÖdeme)}</td>
              <td>{Math.round(taksit?.aylıkAnaPara).toFixed(2)}</td>
              <td>{Math.round(taksit?.kalanAnaPara)}</td>
              <td>{Math.round(taksit?.aylıkFaiz)}</td>
              <td>{Math.round(taksit?.aylıkKkdf)}</td>
              <td>{Math.round(taksit?.aylıkBsmv)}</td>
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
