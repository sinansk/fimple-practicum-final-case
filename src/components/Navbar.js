import { NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <div className="h:20 sm:h-[12vh] sticky top-0 left-0 dark:bg-slate-800 dark:text-gray-50 z-40 bg-white opacity-95 sm:px-10 mb-5 w-full border-b-[1px] border-orange-500 dark:border-cyan-500 flex justify-between">
      <NavLink to="/">
        <div className="my-auto flex justify-between items-center gap-3 cursor-pointer h-full">
          <img
            className="h-16 my-auto"
            src={require("../assets/mortgage.png")}
            alt="logo"
          ></img>
          <p className="font-mono- font-semibold text-2xl">KREDİ HESAPLAMA</p>
        </div>
      </NavLink>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
