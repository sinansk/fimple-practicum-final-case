import NotFoundSvg from "../assets/NotFoundSvg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen sm:min-h-[calc(76vh)]  w-screen grid items-center">
      <div className="flex flex-grow mx-auto text-orange-500 h-80 sm:h-96 dark:text-cyan-500">
        <NotFoundSvg />
      </div>
      <div className="mx-auto">
        <Link to="/">
          <button className="px-2.5 py-1 btn btn-primary">ANA SAYFA</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
