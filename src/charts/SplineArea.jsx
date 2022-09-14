import React from "react";
import ReactApexChart from "react-apexcharts";
import moment from "moment";
import { useSelector } from "react-redux";

const SplineArea = () => {
  const data = useSelector((state) => state.dashboard.totalCases);
  let series1Data = [];
  let series2Data = [];
  let dates = [];
  if (data) {
    series1Data = Object.keys(data.recovered).map((key) => {
      return data.recovered[key];
    });
    series2Data = Object.keys(data.deaths).map((key) => {
      return data.deaths[key];
    });
    dates = Object.keys(data.deaths);
  }

  let days = moment().subtract(30, "days");
  console.log(days);

  const chartConfig = {
    series: [
      {
        name: "series1",
        data: series1Data,
      },
      {
        name: "series2",
        data: series2Data,
      },
    ],
    options: {
      chart: {
        height: 275,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: true,
        borderColor: "#32333F",
      },
      colors: ["#4166FF", "#716A8E"],
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      xaxis: {
        type: "text",
        categories: dates,
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#ffffff",
            fontSize: "14px",
            fontFamily: "Poppins, system-ui, sans-serif",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#ffffff",
            fontSize: "14px",
            fontFamily: "Poppins, system-ui, sans-serif",
          },
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box">' +
            "<span>" +
            series[seriesIndex][dataPointIndex] +
            "</span>" +
            "</div>"
          );
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        type="area"
        options={chartConfig.options}
        series={chartConfig.series}
        height={275}
      />
    </div>
  );
};

export default SplineArea;
