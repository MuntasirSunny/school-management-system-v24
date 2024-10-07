"use client";
import Image from "next/image";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 1000,
    expense: 2200,
  },
  {
    name: "Feb",
    income: 2000,
    expense: 4000,
  },
  {
    name: "Mar",
    income: 8000,
    expense: 5000,
  },
  {
    name: "Apr",
    income: 3000,
    expense: 4000,
  },
  {
    name: "May",
    income: 7000,
    expense: 4000,
  },
  {
    name: "Jun",
    income: 9000,
    expense: 1000,
  },
  {
    name: "Jul",
    income: 2000,
    expense: 4000,
  },
  {
    name: "Aug",
    income: 7000,
    expense: 3000,
  },
  {
    name: "Sep",
    income: 3000,
    expense: 6000,
  },
  {
    name: "Oct",
    income: 9000,
    expense: 3000,
  },
  {
    name: "Nov",
    income: 9000,
    expense: 2000,
  },
  {
    name: "Dec",
    income: 3000,
    expense: 4000,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
