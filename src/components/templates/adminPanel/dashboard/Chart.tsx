"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/shadcn/ui/chart";
import { DashboardTypes } from "@/src/types/AdminPanel.types";
import { useEffect, useState } from "react";
import { ButtonLoader } from "@/src/components/modules/loader/Loader";
const Chart = (data: DashboardTypes) => {
  const [chartResData, setChartResData] = useState<
    [] | { booksCount: number; month: number; villasCount: number }[]
  >([]);

  const [chartData, setChartData] = useState<
    { month: string; reserve: number; villa: number }[]
  >([]);
  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];  

  useEffect(() => {
    if (data.lastFiveMonthAddedVillasCount) {
      let combinedData = data?.lastFiveMonthAddedVillasCount.map((villa) => {
        let reserve = data?.lastFiveMonthBookedReserve.find(
          (book) => book.month === villa.month,
        );
        return {
          month: villa.month,
          villasCount: villa.villasCount,
          booksCount: reserve ? reserve.booksCount : 0,
        };
      });

      setChartResData(combinedData);
    }
  }, [data]);

  useEffect(() => {
    if (chartResData.length) {
      const data = chartResData.map((data) => ({
        month: months[data.month - 1],
        reserve: data.booksCount,
        villa: data.villasCount,
      }));
      setChartData(data);
    }
  }, [chartResData]);

  const chartConfig = {
    reserve: {
      label: "ثبت رزرو",
      color: "#000",
    },
    villa: {
      label: "ثبت ویلا",
      color: "#dc2626",
    },
  } satisfies ChartConfig;

  return chartData.length ? (
    <ChartContainer
      config={chartConfig}
      className="mb-8 h-full max-h-full w-full xl:!mb-0 xl:!w-1/2"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="reserve" fill="var(--color-reserve)" radius={4} />
        <Bar dataKey="villa" fill="var(--color-villa)" radius={4} />
      </BarChart>
    </ChartContainer>
  ) : (
    <div className="h-8">
      <ButtonLoader />
    </div>
  );
};

export default Chart;
