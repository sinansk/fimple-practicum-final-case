import { useState, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    };
  });
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;
  return createPortal(
    <>
      <div
        onClick={close}
        className="fixed z-40 inset-0 bg-gray-900 opacity-80 flex items-center justify-center"
      />
      <div
        className={`fixed no-scrollbar overflow-y-scroll top-12 right-12 left-12 bottom-12 p-10 w-[70vw] z-50 max-h-[95vh] rounded-md border-[0.5px] bg-white dark:bg-gray-700 dark:text-slate-200 border-gray-50 shadow-lg m-auto`}
      >
        <button
          onClick={close}
          className="btn rounded-full px-2.5 py-1 border-[1px] border-orange-400 dark:border-cyan-400 text-white bg-orange-500/90 dark:bg-cyan-500/90 dark:hover:bg-cyan-500/80 hover:bg-orange-500/80 border-orange-500-70 hover:text-white absolute top-3 right-3"
        >
          X
        </button>
        {props.children}
      </div>
    </>,
    document.getElementById("modal")
  );
});

export default Modal;
