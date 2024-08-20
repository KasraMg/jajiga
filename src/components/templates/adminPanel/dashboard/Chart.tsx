"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
 
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/shadcn/ui/chart"
const Chart = () => {

    const chartData = [

        { month: "January", reserve: 186, villa: 80 },
        { month: "February", reserve: 305, villa: 200 },
        { month: "March", reserve: 237, villa: 120 },
        { month: "April", reserve: 73, villa: 190 },
        { month: "May", reserve: 209, villa: 130 },
        { month: "June", reserve: 214, villa: 140 },
      ]
       
      const chartConfig = {
        reserve: {
          label: "ثبت رزرو" ,
          color: "#000",
        },
        villa: {
          label: "ثبت ویلا",
          color: "#dc2626",
        },
      } satisfies ChartConfig
       
  return (
    <ChartContainer config={chartConfig} className="max-h-full h-full xl:!w-1/2 w-full xl:!mb-0 mb-8">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="reserve" fill="var(--color-reserve)" radius={4} />
          <Bar dataKey="villa" fill="var(--color-villa)" radius={4} />
        </BarChart>
      </ChartContainer>
  )
}

export default Chart
