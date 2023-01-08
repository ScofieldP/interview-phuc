import React from "react";
import { Line } from "react-chartjs-2";
import { LineChartData, options, actions, config } from "./dataSource";
import {
  Chart as ChartJS,
  CategoryScale, // tọa độ x
  LinearScale, // tọa độ y
  PointElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend
);
export default function Charts() {
  const datachart = LineChartData.datasets ? LineChartData.datasets : undefined;
  console.log(datachart);
  console.log(LineChartData);
  return (
    <div style={{ width: "1000px", height: "367px" }}>
      <Line
        data={LineChartData}
        options={options}
        actions={actions}
        config={config}
      />
      {LineChartData.datasets
        ? actions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                action.handler(LineChartData.datasets);
              }}
            >
              {action.name}
            </button>
          ))
        : ""}
    </div>
  );
}
