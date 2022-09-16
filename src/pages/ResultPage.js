import LeftSvgComponent from "../assets/LeftSvgComponent";
import Result from "../components/Result";

const ResultPage = () => {
  return (
    <div className="relative min-h-screen sm:min-h-[calc(76vh)] flex flex-col justify-center items-center w-screen mx-auto animate-ltr-linear-left  ">
      <Result />
      <div className="hidden text-orange-500 dark:text-cyan-500 absolute top-0 left-0 sm:flex sm:min-h-[calc(76vh)] flex-grow animate-ltr-image-left ">
        <LeftSvgComponent />
      </div>
    </div>
  );
};

export default ResultPage;
