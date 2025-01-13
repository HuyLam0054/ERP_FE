"use client";
import Link from "next/link";
import * as React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenuOpen } from "react-icons/md";

export function AdminHeader() {
  const [isOpenUserMenu, setIsOpenUserMenu] = React.useState(false);
  const [isOpenMainMenu, setIsOpenMainMenu] = React.useState(false);
  const [isOpenSearch, setIsOpenSearch] = React.useState(true);
  return (
    <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900 h-16 fixed w-full z-40 px-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-300">
            BR-ERP
          </span>
        </Link>

        {/* user menu */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-5">
          {/* Search */}
          <div className="relative flex flex-row">
            <button
              onClick={() => setIsOpenSearch(!isOpenSearch)}
              className="text-white bg-gray-700 hover:bg-gray-500 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 "
            >
              <CiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
            <input
              type="text"
              id="search-navbar"
              className={`transition-all duration-300 ease-in-out sm:translate-x-0 ${
                isOpenSearch ? "w-full p-1.5 px-2" : "w-0"
              } block text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
              placeholder="Search..."
            />
          </div>
          <button
            type="button"
            onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrY7dJj0QnImGcypj9oBdr9u9joHrxgaKY_g&s"
              alt="user photo"
            />
          </button>

          <div
            className={`${
              isOpenUserMenu ? "block" : "hidden"
            } z-40 absolute top-10 right-10 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
            id="user-dropdown"
          >
            <div className="px-4 py-3 ">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          <button
            type="button"
            onClick={() => setIsOpenMainMenu(!isOpenMainMenu)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <MdOutlineMenuOpen className="w-6 h-6" />
          </button>
        </div>
        {/* Menu Hamburger */}
      </div>
    </nav>
  );
}
