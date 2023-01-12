import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { data, options } from "../../config/source";
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
} from "chart.js/auto";
import { ChartButton, ButtonContainer } from "../../style/Chart.styled";
import {
  numbers,
  namedColor,
  transparentize,
  months,
  rand,
} from "../../config/utils.js";
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
  const [state, setState] = useState(data);

  const random = () => {
    state.datasets.forEach((dataset) => {
      dataset.data = numbers({
        count: state.labels.length,
        min: -100,
        max: 100,
      });
    });
    setState({ ...state, datasets: [...state.datasets] });
  };

  const addDataset = () => {
    const dsColor = namedColor(state.datasets.length);
    const newDataset = {
      label: "Quỹ " + (state.datasets.length + 1),
      backgroundColor: transparentize(dsColor, 0.5),
      borderColor: dsColor,
      data: numbers({ count: state.labels.length, min: -100, max: 100 }),
    };
    // state.datasets.push(newDataset);
    // chart.update();
    console.log(newDataset);
    setState({ ...state, datasets: [...state.datasets, newDataset] });
  };
  const addData = () => {
    if (state.datasets.length > 0) {
      state.labels = months({ count: state.labels.length + 1 });

      for (let index = 0; index < data.datasets.length; ++index) {
        state.datasets[index].data.push(rand(-100, 100));
      }
    }
    setState({ ...state, datasets: [...state.datasets] });
  };
  const removeDataset = () => {
    state.datasets.pop();
    setState({ ...state, datasets: [...state.datasets] });
  };
  const removeData = () => {
    state.labels.splice(-1, 1); // remove the label first
    state.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    setState({ ...state, datasets: [...state.datasets] });
  };
  return (
    <>
      <div className={className}>
        <Line
          data={state}
          options={options}
          width={800}
          height={300}
          redraw={true}
        />
        <ButtonContainer>
          <ChartButton onClick={random}>Randomize</ChartButton>
          <ChartButton onClick={addDataset}>Add Dataset</ChartButton>
          <ChartButton onClick={addData}>Add Data</ChartButton>
          <ChartButton onClick={removeDataset}>Remove Dataset</ChartButton>
          <ChartButton onClick={removeData}>Remove Data</ChartButton>
        </ButtonContainer>
      </div>
    </>
  );
}
