import Result from "../components/Result";
import ResultTable from "../components/ResultTable";

const ResultPage = () => {
  return (
    <div className="w-screen sm:w-[95vw] mx-auto -mb-1 bg-[right_88px_top_0] sm:bg-payment-bg sm:dark:bg-dark-payment-bg bg-no-repeat bg-contain animate-ltr-linear min-h-[76vh] h-fit flex justify-center items-center  ">
      {/* <Modal /> */}
      {/* <UserForm /> */}
      {/* <ResultTable /> */}
      <Result />
    </div>
  );
};

export default ResultPage;
