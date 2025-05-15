import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { day: "Mon", volume: 12000 },
  { day: "Tue", volume: 18000 },
  { day: "Wed", volume: 10000 },
  { day: "Thu", volume: 24000 },
  { day: "Fri", volume: 16000 },
];

function OverviewChart() {
  return (
    <div>
      <h2>Transaction Volume Overview</h2>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Bar dataKey="volume" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default OverviewChart;

