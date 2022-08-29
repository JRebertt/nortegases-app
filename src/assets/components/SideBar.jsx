import { useState } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { MenuSideBar } from "./MenuSideBar";

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <div className="fixed z-30 flex items-center cursor-pointer right-4 top-6">
          <HiOutlineMenuAlt3
            className="text-4xl text-brand-black"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      ) : (
        <button
          className="flex text-4xl fil-brand items-center cursor-pointer fixed right-4 top-6 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiX className="text-4xl text-white" />
        </button>
      )}

      <div
        className={`top-0 right-0 w-[75vw] md:w-[35vw] bg-[#172632] px-5 lg:px-10 text-white fixed h-full z-40 ease-in-out duration-300
          ${isOpen ? "translate-x-0 " : "translate-x-full"}`}
      >
        <div className="mt-10">
          <MenuSideBar />
        </div>
      </div>
    </>
  );
}
