import LeftSvgComponent from "../assets/LeftSvgComponent";
import Result from "../components/Result";

const ResultPage = () => {
  return (
    <div className="relative min-h-screen sm:min-h-[calc(76vh)] flex flex-col justify-center items-center w-screen mx-auto animate-ltr-linear-left  ">
      <Result />
      <div className="xl:pt-24 hidden text-orange-500 dark:text-cyan-500 absolute bottom-0 top-0 left-0 lg:flex sm:min-h-[calc(76vh)] flex-grow animate-ltr-image-left ">
        <LeftSvgComponent />
      </div>
    </div>
  );
};

export default ResultPage;
