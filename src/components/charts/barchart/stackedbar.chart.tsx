import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 4000, 3000, 2000];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 2400, 1398, 9800];
const xLabels = [
  "Page 1",
  "Page 2",
  "Page 3",
  "Page 4",
  "Page 5",
  "Page 6",
  "Page 7",
  "Page 8",
  "Page 9",
  "Page 10",
];

export default function StackedBarChart() {
  return (
    <BarChart
      //   width={1000}
      //   height={200}
      series={[
        { data: pData, label: "pv", id: "pvId", stack: "total" },
        { data: uData, label: "uv", id: "uvId", stack: "total" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
}
