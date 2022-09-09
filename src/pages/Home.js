import React from "react";
import TableModal from "../components/TableModal";
import UserForm from "../components/UserForm";

const Home = () => {
  return (
    <div className="w-screen sm:w-[95vw] mx-auto -mb-1 bg-[right_88px_top_0] sm:bg-payment-bg-image bg-no-repeat bg-contain animate-ltr-linear h-[76vh] flex justify-center items-center ">
      <UserForm />
      {/* <TableModal /> */}
    </div>
  );
};

export default Home;
