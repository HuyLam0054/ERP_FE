"use client";

import * as React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineMenuOpen } from "react-icons/md";
import { sidebarItems } from "@/data/sidebar";

export function RootSidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

  return (
    <>
      <aside
        className={`${
          isOpenSidebar ? "w-64" : "w-14"
        } fixed top-12 left-0 h-screen -translate-x-full sm:translate-x-0 transition-all duration-300 ease-in-out z-30`}
        aria-label="Sidebar"
      >
        <div
          className={`h-full px-3 py-3 overflow-y-auto bg-gray-900 dark:bg-gray-800`}
        >
          <ul className="space-y-2 font-medium mt-5">
            <li>
              <button
                onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdOutlineMenuOpen className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </button>
            </li>
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                  className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {item.icon}
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    {item.title}
                  </span>
                  <IoIosArrowUp className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
