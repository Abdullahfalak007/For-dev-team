import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import NumberOfCallsChartData from "../data/NumberOfCallsChartData.json";

const CustomXAxisTick = ({ x, y, payload }) => {
  const avatar = NumberOfCallsChartData[payload.index].avatar;
  return (
    <g transform={`translate(${x},${y})`}>
      <image
        href={avatar}
        x={-12}
        y={-3}
        width={24}
        height={24}
        style={{ borderRadius: "50%" }}
      />
    </g>
  );
};

const CustomLabel = ({ x, y }) => {
  return (
    <image
      xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDE5IDE5IiBmaWxsPSJub25lIj4KPGNpcmNsZSBjeD0iOS4zODgwNiIgY3k9IjkuNzk5MTkiIHI9IjguMDM0MjYiIGZpbGw9IiMwMEI3RkUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMi4yOTU1Ii8+Cjwvc3ZnPgo="
      x={x - 3} // Center the SVG horizontally
      y={y - 20} // Position the SVG above the bar
      width={19}
      height={19}
    />
  );
};

const NumberOfCallsChart = () => {
  return (
    <div
      className="bg-white rounded shadow p-4 pt-10 mb-4"
      style={{ backgroundColor: "#EDF5FF", borderRadius: "10px" }}
    >
      <h3 className="text-[#6C6A6A] font-poppins text-[0.85725rem] font-medium mb-4 ml-12">
        Number of Calls
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={NumberOfCallsChartData} margin={{ top: 20 }}>
          <CartesianGrid stroke="#D9D9D9" vertical={false} />
          <XAxis dataKey="name" tick={<CustomXAxisTick />} />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="calls"
            fill="url(#colorUv)"
            barSize={12} // width of the bar in pixels
          >
            <LabelList dataKey="calls" content={CustomLabel} />
          </Bar>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#00B7FE" stopOpacity={1} />
              <stop offset="100%" stopColor="#5823FF" stopOpacity={1} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NumberOfCallsChart;
