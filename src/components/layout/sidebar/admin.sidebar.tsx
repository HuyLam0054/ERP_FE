"use client";

import * as React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { adminSidebarItems } from "@/data/sidebar";
import { useRouter } from "next/navigation";
import { MdOutlineMenuOpen } from "react-icons/md";

export function AdminSidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);
  const [openItemId, setOpenItemId] = React.useState<number | null>(null);
  const router = useRouter();

  const toggleItem = (id: number) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <aside
        className={`${
          isOpenSidebar ? "w-72" : "w-14"
        } fixed top-12 left-0 h-screen -translate-x-full sm:translate-x-0 transition-all duration-300 ease-in-out z-30`}
        aria-label="Sidebar"
      >
        <div
          className={`h-full px-3 py-3 overflow-y-auto bg-gray-900 dark:bg-gray-800`}
        >
          <ul className="space-y-2 font-medium mt-5">
            {/* Nút mở/đóng sidebar */}
            <li>
              <button
                onClick={() => {
                  setOpenItemId(null);
                  setIsOpenSidebar(!isOpenSidebar);
                }}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdOutlineMenuOpen className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </button>
            </li>

            {/* Render danh sách items */}
            {adminSidebarItems.map((item) => (
              <li key={item.id}>
                {/* Item chính */}
                <button
                  onClick={() => {
                    if (item?.children) {
                      toggleItem(item.id); // Toggle mở/đóng child items
                      setIsOpenSidebar(true);
                    } else {
                      setIsOpenSidebar(false);
                      router.push(item.path); // Điều hướng tới path
                    }
                  }}
                  className="flex items-center w-full p-2 text-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 group"
                >
                  {item.icon}
                  <span
                    className={`${
                      isOpenSidebar ? "block" : "hidden"
                    } flex-1 ms-3 whitespace-nowrap`}
                  >
                    {item.title}
                  </span>
                  {item.children && (
                    <>
                      {openItemId === item.id ? (
                        <IoIosArrowDown className="w-5 h-5 " />
                      ) : (
                        <IoIosArrowUp className="w-5 h-5 " />
                      )}
                    </>
                  )}
                </button>
                {/* Child items */}
                {item.children && openItemId === item.id && (
                  <ul className="pl-6 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <button
                          onClick={() => {
                            setIsOpenSidebar(false);
                            setOpenItemId(null);
                            router.push(child.path);
                          }}
                          className="flex items-center w-full p-2 text-sm text-gray-200 rounded-lg hover:bg-gray-200 hover:text-gray-900"
                        >
                          {child.icon}
                          <span className="ms-3">{child.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
