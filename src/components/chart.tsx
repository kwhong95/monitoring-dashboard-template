import { Line } from "react-chartjs-2";

const Chart: React.FC = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
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
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Line width={100} height={40} data={data} options={options} />
}

export default Chart;
