import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { data, options, actions } from "./DataSource";
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
import { ChartButton } from "../../style/Chart.styled";
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
export default function Charts({ className }) {
  return (
    <div className={className}>
      <Line
        data={data}
        options={options}
        width={800}
        height={300}
        redraw={true}
      />
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        {actions.map((action, index) => (
          <ChartButton key={index} onClick={() => action.handler(data)}>
            {action.name}
          </ChartButton>
        ))}
      </div>
    </div>
  );
}
