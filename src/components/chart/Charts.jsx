import React from "react";
import {
  Chart as ChartJS,
  CategoryScale, // tọa độ x
  LinearScale, // tọa độ y
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { data } from "./dataSource";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function Charts() {
  const options = {
    plugins: {
      legend: true,
    },

    // Tọa độ
    scales: {
      // y: {
      //   min: 0.9,
      //   max: 1,
      // },
    },
  };
  return (
    <div style={{ width: "600px", height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
}
