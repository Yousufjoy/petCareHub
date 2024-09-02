"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const pathName = usePathname();

  return (
    <div className="relative">
      <nav className="flex justify-between items-center p-4">
        <div className="md:block">
          <Image
            src="/assets/logo.jpg"
            height={100}
            width={100}
            alt="No Logo Found"
          />
        </div>
        <div className="hidden md:flex md:items-center md:gap-x-6">
          <ul className="flex md:flex-row md:gap-x-6 gap-x-6 text-[#7A7A7A] font-fanwood text-xl">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`${
                  pathName === item.path ? "border-b-2 border-blue-500" : ""
                } mt-4 md:mt-0`}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className="flex md:flex-row md:gap-x-3 mt-4 md:mt-0">
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={handleToggle} className="text-3xl">
            {toggle ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`${
          toggle ? "block" : "hidden"
        } md:hidden absolute top-full left-0 w-full bg-white p-2 z-50`}
      >
        <ul className="flex flex-col gap-y-4 items-center justify-center border text-[#7A7A7A] font-fanwood text-xl">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`${
                pathName === item.path ? "border-b-2 border-blue-500" : ""
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-y-3 mt-4">
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  );
};

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default Navbar;
