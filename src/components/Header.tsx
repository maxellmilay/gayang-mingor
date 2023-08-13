"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import Link from "next/link";
import routes from "@/enums/routes";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdownClick = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    closeDropdownClick();
  }, [pathname]);

  return (
    <header className="flex fixed z-10 w-screen px-7 py-4 bg-mingor-blue-100/40 justify-between backdrop-blur-[10px] header-box-shadow bg-center">
      <Link href={routes.HOME} className="flex items-center">
        <Image
          src="/images/gayang-mingor-logo.png"
          width={35}
          height={35}
          alt="Logo"
          className="hidden md:block"
        />
        <p className="font-gotham font-bold md:mx-5 text-white text-left">
          GAYANG MINGOR
        </p>
      </Link>
      <div className="md:flex items-center text-white font-gotham font-light hidden ">
        <Link href={routes.ABOUT} className="mr-6">
          About Us
        </Link>
        <Link href={routes.MEMBERS} className="mr-6">
          Member Directory
        </Link>
        <Link href={routes.TIMELINE} className="mr-6">
          Timeline
        </Link>
        <Link
          href={routes.CONTACT}
          className="font-bold bg-mingor-yellow px-4 py-1 rounded-[70px] h-fit"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex items-center md:hidden">
        <button className="h-fit" onClick={handleDropdownClick}>
          <Image
            src="/images/menu-icon.png"
            width={30}
            height={30}
            alt="Menu"
            className="h-fit"
          />
        </button>
      </div>
      {isDropdownOpen && <Dropdown closeDropdownClick={closeDropdownClick} />}
    </header>
  );
};

export default Header;
