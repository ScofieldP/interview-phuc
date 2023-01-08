import React from "react";
import { Line } from "react-chartjs-2";
import { data, options, actions, config } from "./dataSource";
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
  return (
    <div style={{ width: "1000px", height: "367px" }}>
      <Line data={data} options={options} actions={actions} config={config}>
        <button>Alo</button>
      </Line>
    </div>
  );
}
