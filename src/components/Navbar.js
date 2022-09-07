import React from "react";

const Navbar = () => {
  return (
    <div className="h-20 sm:px-10 mb-5 w-full border-b-[1px] border-orange-500 flex justify-between">
      <div className="flex items-center gap-3 cursor-pointer">
        <img
          className="h-16 my-auto"
          src={require("../assets/mortgage.png")}
          alt="logo"
        ></img>
        <p className="font-mono- font-semibold text-2xl">KREDİ HESAPLAMA</p>
      </div>
    </div>
  );
};

export default Navbar;
