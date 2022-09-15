import { ReactComponent as Logo } from "../assets/bank.svg";
import { NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <div className="h-20 sm:h-[12vh] px-5 sticky top-0 left-0 dark:bg-slate-800 dark:text-gray-50 z-10 bg-white opacity-95 sm:px-20 w-full border-b-[1px] border-orange-500 dark:border-cyan-500 flex justify-between">
      <NavLink to="/">
        <div className="flex items-center justify-between h-full gap-3 my-auto cursor-pointer">
          <div className="flex items-center justify-center h-full text-orange-500 dark:text-cyan-500">
            <Logo />
          </div>
          <p className="font-mono text-2xl font-semibold sm:text-3xl">
            KREDİ HESAPLAMA
          </p>
        </div>
      </NavLink>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
