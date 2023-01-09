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
import { ChartButton } from "../../style/style";
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
  const charts = data.datasets?.map((i) => i.data);
  // console.log(charts);
  console.log(actions);
  return (
    <>
      <Line data={data} options={options} />

      {actions.map((action, index) => (
        <ChartButton key={index} onClick={() => action.handler(charts)}>
          {action.name}
        </ChartButton>
      ))}
    </>
  );
}
