import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen sm:min-h-[calc(76vh)] flex flex-col justify-center items-center w-screen mx-auto bg-center bg-not-found-bg-orange sm:dark:bg-not-found-bg-blue bg-no-repeat bg-contain">
      <div className="mt-auto mb-3">
        <Link to="/">
          <button className="px-2.5 py-1 btn btn-primary">ANA SAYFA</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
