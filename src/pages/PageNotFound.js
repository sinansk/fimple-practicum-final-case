import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen sm:min-h-[calc(76vh)] flex flex-col justify-center items-center w-screen mx-auto bg-center bg-not-found-bg-orange sm:dark:bg-not-found-bg-blue bg-no-repeat bg-contain">
      <button className="px-2.5 py-1 mt-auto mb-3 btn btn-primary">
        <Link to="/">ANA SAYFA</Link>
      </button>
    </div>
  );
};

export default PageNotFound;
