import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
require("highcharts/highcharts-more.js")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "Weather for Toronto 2020",
  },
  yAxis: [
    {
      title: {
        text: "Temperature (C)",
      },
    },
    // Secondary
    {
      tickInterval: 0.5,
      title: {
        text: "Relative Humidity (%)",
      },
      opposite: true,
    },
    // Tertiary
    {
      title: {
        text: "Snowfall (cm)",
      },
      opposite: true,
    },
  ],
  xAxis: {
    type: "datetime",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  series: [
    {
      name: "Temperature",
      type: "areasplinerange",
      data: [
        [0, 3, 4],
        [1, 3, 5],
        [2, 4, 6],
        [3, 5, 6],
        [4, 2, 3],
        [5, 1, 2],
      ],
      tooltip: {
        valueSuffix: " C",
      },
      color: "rgba(255, 0, 0, 1)",
    },
    {
      name: "Relative Humidty",
      data: [1, 2, 1, 4, 3, 6],
      tooltip: {
        valueSuffix: "%",
      },
    },
    {
      name: "Snowfall",
      type: "areaspline",
      data: [
        [0, 7],
        [1, 5],
        [2, 6],
        [3, 10],
        [4, 0],
        [5, 0],
      ],
      tooltip: {
        valueSuffix: "cm",
      },
      color: "rgba(240, 240, 214, 1)",
    },
  ],
};

const App = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

render(<App />, document.getElementById("root"));
