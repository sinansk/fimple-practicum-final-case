import RightSvgComponent from "../assets/RightSvgComponent";
import UserForm from "../components/UserForm";

const Home = () => {
  return (
    <div className="relative min-h-screen sm:min-h-[calc(76vh)] flex flex-col justify-center items-center w-screen mx-auto animate-ltr-linear-right">
      <UserForm />
      <div className="xl:pt-24 hidden absolute right-0 bottom-0 top-0 lg:flex sm:min-h-[calc(76vh)] max-h-fit max-w-fit flex-grow animate-ltr-image-right text-orange-500 dark:text-cyan-500">
        <RightSvgComponent />
      </div>
    </div>
  );
};

export default Home;
