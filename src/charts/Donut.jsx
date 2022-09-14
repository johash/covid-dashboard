import ReactApexChart from "react-apexcharts";

const Donut = () => {
  const chartConfig = {
    series: [65, 35],
    options: {
      chart: {
        type: "donut",
        foreColor: "#ffffff",
        fontFamily: "Poppins, system-ui, sans-serif",
      },
      labels: ["Closed Cases", "Active Cases"],
      dataLabels: {
        enabled: false,
      },
      colors: ["#41CBE2", "#4166FF"],
      stroke: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
            },
          },
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        type="donut"
        options={chartConfig.options}
        series={chartConfig.series}
        height={210}
      />
    </div>
  );
};

export default Donut;
