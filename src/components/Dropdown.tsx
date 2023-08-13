import React from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

interface PropsInterface {
  closeDropdownClick: () => void;
}

const Dropdown = (props: PropsInterface) => {
  const { closeDropdownClick } = props;

  return (
    <div className="flex flex-col fixed top-0 left-0 w-screen h-screen bg-mingor-blue-100">
      <div className="flex justify-end px-7 py-4">
        <button
          className="flex w-[30px] h-[30px] justify-center items-center"
          onClick={closeDropdownClick}
        >
          <Image
            src="/images/exit-icon.png"
            height={20}
            width={20}
            alt="Exit"
            className="h-fit"
            unoptimized={true}
          />
        </button>
      </div>
      <div className="flex justify-end px-7 py-4">
        <div className="flex flex-col font-gotham font-thin text-white text-xl">
          <button className="text-right mb-5">About Us</button>
          <button className="text-right mb-5">Member Directory</button>
          <button className="text-right mb-5">Timeline</button>
          <button className="text-right">Contact Us</button>
        </div>
        <div className="flex w-[30px] justify-center">
          <div className="border border-r border-white h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
