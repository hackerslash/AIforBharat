"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, LineChart } from "recharts";

type Point = { month: string; revenue: number };

export function RevenueBarChart({ data }: { data: Point[] }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#EFE9DE" />
          <XAxis dataKey="month" stroke="#A0A0A0" />
          <YAxis stroke="#A0A0A0" />
          <Tooltip />
          <Bar dataKey="revenue" fill="#2C5F2D" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RevenueLineChart({ data }: { data: Point[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#EFE9DE" />
          <XAxis dataKey="month" stroke="#A0A0A0" />
          <YAxis stroke="#A0A0A0" />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#2C5F2D" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
