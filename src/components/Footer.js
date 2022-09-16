import { ReactComponent as Github } from "../assets/github.svg";

const Footer = () => {
  return (
    <div className="h-20 absolute-0 right-0 left-0 sm:h-[12vh] w-full flex justify-center items-center bg-orange-400 dark:bg-slate-800 sm:fixed inset-x-0 bottom-0">
      <div className="flex flex-col items-center gap-2 text-gray-200 dark:text-slate-300 dark:hover:text-slate-100">
        <a
          href="https://github.com/sinansk"
          rel="noreferrer"
          target="_blank"
          className="hover:text-gray-100"
        >
          <Github />
        </a>
        <p>
          Copyright{" "}
          <a
            className="hover:underline hover:text-gray-100"
            href="https://sinans.dev"
            rel="noreferrer"
            target="_blank"
          >
            Sinan Şık
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
