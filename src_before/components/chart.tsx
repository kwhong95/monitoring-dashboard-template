import { Line } from "react-chartjs-2";

const Chart: React.FC = () => {
  const data = {
    labels: ['11:15', '11:30', '11:45', '12:00', '12:15', '12: 30'],
    datasets: [
      {
        label: "Item",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(0, 0, 0)',
        borderColor: 'rgba(255, 255, 255, 255)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };

  return <Line width={100} height={40} data={data} options={options} />
}

export default Chart;
