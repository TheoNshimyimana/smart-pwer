import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Chart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Power Usage (kWh)",
        data: [20, 35, 30, 50, 40],
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default Chart;
