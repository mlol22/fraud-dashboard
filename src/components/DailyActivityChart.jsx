import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { time: "10AM", frauds: 1 },
  { time: "12PM", frauds: 2 },
  { time: "2PM", frauds: 5 },
  { time: "4PM", frauds: 3 },
  { time: "6PM", frauds: 6 },
];

function DailyActivityChart() {
  return (
    <div>
      <h2>Fraud Activity (Today)</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="frauds" stroke="#ff7300" />
      </LineChart>
    </div>
  );
}

export default DailyActivityChart;
