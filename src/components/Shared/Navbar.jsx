"use client";

import { FiLogOut } from "react-icons/fi";
import { signOut, useSession } from "next-auth/react";
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
  const session = useSession();

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
            {session?.status === "loading" && (
              <span className="loading loading-ring loading-lg"></span>
            )}
            {session?.status === "unauthenticated" && (
              <div className="flex md:flex-row md:gap-x-3 mt-4 md:mt-0">
                <Link href="/signup" className="btn btn-primary">
                  Register
                </Link>
                <Link href="/login" className="btn btn-primary px-8">
                  Login
                </Link>
              </div>
            )}
            {session?.status === "authenticated" && (
              <FiLogOut
                className="text-3xl cursor-pointer text-[#FFB7B7]"
                onClick={() => signOut()}
              ></FiLogOut>
            )}
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
        <ul className="flex flex-col-reverse gap-y-4 items-center justify-center  text-[#7A7A7A] font-fanwood text-xl shadow-lg rounded-3xl border-4 border-transparent bg-gradient-to-r from-[#EEE9F2] to-white">
          {session?.status === "authenticated" ? (
            <div className="flex flex-col gap-y-3 mt-4">
              <FiLogOut
                className="text-3xl cursor-pointer text-[#FFB7B7]"
                onClick={() => signOut()}
              ></FiLogOut>
            </div>
          ) : (
            <div className="flex flex-col gap-y-3 mt-4">
              <Link href="/login" className="btn btn-primary px-8">
                Login
              </Link>
              <Link href="/signup" className="btn btn-primary">
                Register
              </Link>
            </div>
          )}
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
    path: "",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Contact",
    path: "",
  },
];

export default Navbar;
