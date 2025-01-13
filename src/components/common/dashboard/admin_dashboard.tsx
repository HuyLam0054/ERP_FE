"use client";
import StackedAreaChart from "@/components/common/charts/areachart/stackedarea.chart";
import StackedBarChart from "@/components/common/charts/barchart/stackedbar.chart";
import SimpleLineChart from "@/components/common/charts/linechart/linechart";
import BasicPie from "@/components/common/charts/piechart/basicpie.chart";
import * as React from "react";

export function AdminDashboard() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const amtData = [2400, 2210, 0, 2000, 2181, 2500, 2100];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  const pieData = React.useMemo(
    () => [
      { id: 0, value: 10, label: "Iphone" },
      { id: 1, value: 15, label: "Ipad" },
      { id: 2, value: 20, label: "Watch" },
      { id: 3, value: 20, label: "Macbook" },
    ],
    []
  );
  return (
    <>
      <div className={`p-4 sm:ml-14 bg-slate-500`}>
        <div className="mt-20">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Our products
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Browse a list of Flowbite products designed to help you work
                  and play, stay organized, get answers, keep in touch, grow
                  your business, and more.
                </p>
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">$1999</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$99</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className={`p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16`}
          >
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 h-[300px]">
            <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <SimpleLineChart />
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <StackedAreaChart
                uData={uData}
                pData={pData}
                amtData={amtData}
                xLabels={xLabels}
              />
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <BasicPie data={pieData} />
            </div>
          </div> */}
            <div className="flex items-center justify-center h-[300px] mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <StackedBarChart />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4 h-[300px]">
              <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                <SimpleLineChart />
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4 h-[300px] max-h-[300px]">
              <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                <SimpleLineChart />
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                <StackedAreaChart
                  uData={uData}
                  pData={pData}
                  amtData={amtData}
                  xLabels={xLabels}
                />
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                <BasicPie data={pieData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
