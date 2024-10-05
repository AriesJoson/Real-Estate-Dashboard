import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../css/chart.css'

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartComponent = () => {
  // Chart data and options
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [0, 100000, 150000, 100000, 50000, 120000, 200000, 190000, 90000, 160000, 140000, 170000],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Line Chart Example',
      },
    },
  };

  return (
    <div className='chart-box'>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartComponent;