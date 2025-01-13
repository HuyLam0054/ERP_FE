"use client";
import * as React from "react";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";

export interface IDataProps {
  uData: number[];
  pData: number[];
  amtData: number[];
  xLabels: string[];
}

export default function StackedAreaChart(props: IDataProps) {
  const { uData, pData, amtData, xLabels } = props;

  return (
    <LineChart
      series={[
        {
          data: uData,
          label: "uv",
          area: true,
          stack: "total",
          showMark: false,
        },
        {
          data: pData,
          label: "pv",
          area: true,
          stack: "total",
          showMark: false,
        },
        {
          data: amtData,
          label: "amt",
          area: true,
          stack: "total",
          showMark: false,
        },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: "none",
        },
      }}
    />
  );
}
