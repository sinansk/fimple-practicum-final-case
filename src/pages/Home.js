import React from "react";
import UserForm from "../components/UserForm";

const Home = () => {
  return (
    <div className="w-screen sm:w-[95vw] mx-auto -mb-1 bg-right-bottom sm:bg-payment-bg-image bg-no-repeat bg-contain h-[calc(100vh-10rem)] flex justify-center items-center ">
      <UserForm />
    </div>
  );
};

export default Home;
