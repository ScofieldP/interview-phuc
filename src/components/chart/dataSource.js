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
      label: "Quỹ 1",
      data: numbers(NUMBER_CFG),
      borderColor: CHART_COLORS.red,
      backgroundColor: transparentize(CHART_COLORS.red, 0.5),
    },
    {
      label: "Quỹ 2",
      data: numbers(NUMBER_CFG),
      borderColor: CHART_COLORS.blue,
      backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
    },
  ],
};

export const options = {
  responsive: true,
  data: data,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        pointStyle: "rect",
      },
      position: "top",
      align: "end",
    },

    maintainAspectRatio: false,
  },
};

export const actions = [
  {
    name: "Randomize",

    handler(chart) {
      console.log(chart);
      chart.datasets.forEach((dataset) => {
        dataset.data = numbers({
          count: chart.labels.length,
          min: -100,
          max: 100,
        });
      });
      let lineChart = this.chartRef;
      lineChart.update();
    },
  },
  {
    name: "Add Dataset",
    handler(chart) {
      console.log(chart);
      // const data = data;
      const dsColor = namedColor(chart.datasets.length);
      const newDataset = {
        label: "Dataset " + (data.datasets.length + 1),
        backgroundColor: transparentize(dsColor, 0.5),
        borderColor: dsColor,
        data: numbers({ count: chart.labels.length, min: -100, max: 100 }),
      };
      chart.datasets.push(newDataset);
      // chart.update();
      console.log(newDataset);
    },
  },
  {
    name: "Add Data",
    handler(chart) {
      console.log(chart);
      // const data = chart.data;
      if (chart.datasets.length > 0) {
        chart.labels = months({ count: chart.labels.length + 1 });

        for (let index = 0; index < data.datasets.length; ++index) {
          chart.datasets[index].data.push(rand(-100, 100));
        }

        // chart.update();
      }
    },
  },
  {
    name: "Remove Dataset",
    handler(chart) {
      console.log(chart);

      chart.datasets.pop();
      // chart.update();
    },
  },
  {
    name: "Remove Data",
    handler(chart) {
      console.log(chart);

      chart.labels.splice(-1, 1); // remove the label first

      chart.datasets.forEach((dataset) => {
        dataset.data.pop();
      });

      // chart.update();
    },
  },
];
