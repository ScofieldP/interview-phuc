import {
  numbers,
  namedColor,
  transparentize,
  months,
  rand,
  CHART_COLORS,
} from "./Utils.js";

export const DATA_COUNT = 7;
export const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

export const labels = months({ count: 7 });
export const data = {
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      data: numbers(NUMBER_CFG),
      borderColor: CHART_COLORS.red,
      backgroundColor: transparentize(CHART_COLORS.red, 0.5),
    },
    {
      label: "Dataset 2",
      data: numbers(NUMBER_CFG),
      borderColor: CHART_COLORS.blue,
      backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
    },
  ],
};
export const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  },
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        pointStyle: "rect",
      },
      position: "top",
    },

    maintainAspectRatio: false,
  },
};

export const actions = [
  {
    name: "Randomize",
    handler(chart) {
      console.log(chart);
      const chartRandom = chart.data.datasets;
      chartRandom.forEach((dataset) => {
        dataset.data = numbers({
          count: chart.data.labels.length,
          min: -100,
          max: 100,
        });
      });

      chart.update();
    },
  },
  {
    name: "Add Dataset",
    handler(chart) {
      console.log(chart);
      const data = chart.data;
      const dsColor = namedColor(chart.data.datasets.length);
      const newDataset = {
        label: "Dataset " + (data.datasets.length + 1),
        backgroundColor: transparentize(dsColor, 0.5),
        borderColor: dsColor,
        data: numbers({ count: data.labels.length, min: -100, max: 100 }),
      };
      chart.data.datasets.push(newDataset);
      chart.update();
    },
  },
  {
    name: "Add Data",
    handler(chart) {
      const data = chart.data;
      if (data.datasets.length > 0) {
        data.labels = months({ count: data.labels.length + 1 });

        for (let index = 0; index < data.datasets.length; ++index) {
          data.datasets[index].data.push(rand(-100, 100));
        }

        chart.update();
      }
    },
  },
  {
    name: "Remove Dataset",
    handler(chart) {
      chart.data.datasets.pop();
      chart.update();
    },
  },
  {
    name: "Remove Data",
    handler(chart) {
      chart.data.labels.splice(-1, 1); // remove the label first

      chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
      });

      chart.update();
    },
  },
];
// </block:actions>

// <block:setup:1>
