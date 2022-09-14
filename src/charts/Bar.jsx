import ReactApexChart from "react-apexcharts";

const Bar = () => {
  const chartConfig = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 200,
        foreColor: "#ffffff",
        fontFamily: "Poppins, system-ui, sans-serif",
        toolbar: {
          show: false,
        },
      },
      colors: "#41CBE2",
      grid: {
        show: true,
        borderColor: "#32333F",
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
          columnWidth: "45%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        type="bar"
        options={chartConfig.options}
        series={chartConfig.series}
        height={200}
      />
    </div>
  );
};

export default Bar;
