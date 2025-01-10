"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

// export interface IRootheaderProps {
// }

export function RootHeader() {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [isOpenNav, setIsOpenNav] = React.useState(false);

  const checkScrollPoition = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", checkScrollPoition);
  }, []);
  return (
    <nav
      className={`
        bg-white dark:bg-gray-900 fixed w-full z-20 start-0 border-b border-gray-200 dark:border-gray-600`}
    >
      <div
        className={`${
          isScrolled ? "mt-0" : "mt-10"
        } max-w-screen-xl flex flex-wrap items-center justify-between mx-auto transition-all duration-300 ease-in-out p-4`}
      >
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            height={50}
            width={50}
            src="/logo.png"
            className="h-8 w-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-yellow-500">
            Portfolio
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          >
            Hire Me
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => {
              setIsOpenNav(!isOpenNav);
            }}
          >
            <GiHamburgerMenu className="text-yellow-600 hover:text-yellow-800" />
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isOpenNav ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="#home"
                onClick={() => {
                  setIsOpenNav(false);
                }}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={() => {
                  setIsOpenNav(false);
                }}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                onClick={() => {
                  setIsOpenNav(false);
                }}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                onClick={() => {
                  setIsOpenNav(false);
                }}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
