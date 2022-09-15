import UserForm from "../components/UserForm";

const Home = () => {
  return (
    <div className=" relative min-h-screen sm:min-h-[calc(76vh)] flex flex-col justify-center items-center w-screen mx-auto bg-[right_88px_top_0] sm:bg-right-bg-orange sm:dark:bg-right-bg-blue bg-no-repeat bg-contain animate-ltr-linear-right  ">
      <UserForm />
    </div>
  );
};

export default Home;
