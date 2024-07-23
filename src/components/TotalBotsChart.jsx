import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";
import "../index.css"; // Import the CSS file for custom styles
import totalBotsChartData from "../data/totalBotsChartData.json"; // Import the JSON data

const TotalBotsChart = () => {
  const [data, setData] = useState(totalBotsChartData.monthly);
  const [view, setView] = useState("Monthly");

  const handleViewChange = (newView) => {
    setView(newView);
    if (newView === "Monthly") {
      setData(totalBotsChartData.monthly);
    } else if (newView === "Daily") {
      setData(totalBotsChartData.daily);
    } else if (newView === "Weekly") {
      setData(totalBotsChartData.weekly);
    }
  };

  return (
    <div className="bg-[#EDF5FF] rounded-[1.21719rem] p-4 w-[25.0625rem] h-[25.875rem]">
      <div className="flex justify-between items-center pt-4">
        <h3 className="font-poppins text-[#6C6A6A] text-[0.85725rem] ml-[2rem] mb-[2rem] font-medium">
          Total Bots
        </h3>
        <div className="relative -mt-8">
          <select
            className="w-[4.5rem] h-[1.36294rem]  rounded-[0.52725rem] bg-[#00B7FE] text-white font-poppins text-[0.7rem] font-normal cursor-pointer border-none outline-none"
            value={view}
            onChange={(e) => handleViewChange(e.target.value)}
          >
            <option
              className="rounded-[0.52725rem] bg-white text-[#00B7FE] font-poppins text-[0.7rem] font-normal"
              value="Monthly"
            >
              Monthly
            </option>
            <option
              className="rounded-[0.52725rem] bg-white text-[#00B7FE] font-poppins text-[0.7rem] font-normal"
              value="Daily"
            >
              Daily
            </option>
            <option
              className="rounded-[0.52725rem] bg-white text-[#00B7FE] font-poppins text-[0.7rem] font-normal"
              value="Weekly"
            >
              Weekly
            </option>
          </select>
        </div>
      </div>
      <div className="chart-container">
        <div className="w-[150%]">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, left: -12, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5823FF" stopOpacity={1} />
                  <stop offset="100%" stopColor="#00B7FE" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#D9D9D9" vertical={false} />
              <XAxis dataKey="name" interval={0} tick={{ dy: 5 }} />
              <YAxis tick={{ dx: -10 }} style={{ marginLeft: "-10px" }} />
              <Tooltip />
              <Area
                type="linear"
                dataKey="bots"
                stroke="#8884d8"
                fill="url(#colorGradient)"
              />
              <Line
                type="linear"
                dataKey="bots"
                stroke="#8884d8"
                dot={{ r: 0 }} // remove dots on the line
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TotalBotsChart;
