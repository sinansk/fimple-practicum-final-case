import { NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <div className="h:20 sm:h-[12vh] px-5 sticky top-0 left-0 dark:bg-slate-800 dark:text-gray-50 z-10 bg-white opacity-95 sm:px-20 mb-5 w-full border-b-[1px] border-orange-500 dark:border-cyan-500 flex justify-between">
      <NavLink to="/">
        <div className="my-auto flex justify-between items-center gap-3 cursor-pointer h-full">
          {/* <img
            className="h-16 my-auto"
            src={require("../assets/mortgage.png")}
            alt="logo"
          ></img> */}
          <div className="text-orange-500 dark:text-cyan-500 h-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox=" 0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z" />
            </svg>
          </div>
          <p className="font-mono font-semibold text-2xl sm:text-3xl">
            KREDİ HESAPLAMA
          </p>
          {/* <div className="text-orange-500 dark:text-cyan-500 h-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox=" 0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z" />
            </svg> */}
          {/* <img
              className="text-orange-500 dark:text-cyan-500"
              src={require("../assets/bank.svg").default}
              alt={"bank-logo"}
            ></img> */}
        </div>
        {/* </div> */}
      </NavLink>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
