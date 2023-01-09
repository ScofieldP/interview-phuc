import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { data, options, actions, config } from "./DataSource";
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
  // console.log(data.datasets);
  // const [chart, setChart] = useState([]);
  // // console.log(datachart);
  // const date = data.datasets.map((i) => i.data);
  // console.log(date);
  // const chartData = () => {
  //   const datachart = data.datasets ? data.datasets : undefined;

  //   setChart(datachart);
  // };
  // console.log(chart);

  // // console.log(LineChartData.datasets.map((i) => i.data);
  // localStorage.setItem("chart", date);
  const charts = data.datasets;
  localStorage.setItem("chart", JSON.stringify(charts));
  // console.log(charts);
  // console.log(actions);
  console.log(data.datasets);
  return (
    <div className={className}>
      <Line data={data} options={options} width={800} height={300} />
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        {actions.map((action, index) => (
          <ChartButton
            key={index}
            onClick={() => action.handler(data?.datasets)}
          >
            {action.name}
          </ChartButton>
        ))}
      </div>
    </div>
  );
}
