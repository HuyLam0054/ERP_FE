"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export interface IDataProps {
  data: { id: number; value: number; label: string }[];
}

export default function BasicPie(props: IDataProps) {
  const { data } = props;

  return (
    <PieChart
      slotProps={{ legend: { hidden: true } }}
      series={[
        {
          data: data,
        },
      ]}
    />
  );
}
