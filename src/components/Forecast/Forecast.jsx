// import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import { callback } from 'chart.js/dist/helpers/helpers.core';
// import { callback } from 'chart.js/dist/helpers/helpers.core';
// Реєструємо компоненти Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Forecast = () => {
  const data = {
    labels: [
      '11 pm',
      '1 am',
      '2 am',
      '3 am',
      '4 am',
      '5 am',
      '6 am',
      '7 am',
      '8 am',
      '9 am',
      '10 am',
      '11 am',
      '12 pm',
      '1 pm',
      '2 pm',
      '3 pm',
      '4 pm',
      '5 pm',
      '6 pm',
    ],
    datasets: [
      {
        label: 'Temperature (°C)',
        data: [
          15, 13, 12, 12, 12, 11, 11, 11, 12, 14, 16, 18, 20, 22, 23, 24, 24,
          24, 24,
        ],
        borderColor: '#f4a261',
        backgroundColor: 'rgba(244, 162, 97, 0.2)',
        fill: false,
        tension: 0.4, // Додає згладжування лінії
        borderWidth: 2, // Товстіша лінія для чіткішого вигляду
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Hourly forecast',
        align: 'start',
        color: 'rgb(0, 0, 0)',
        padding: '20',
        font: {
            family: 'Montserrat',
            size: 16,
            color: 'rgb(0, 0, 0)',
        }
      },
    },
    scales: {
      x: {
        position: 'top',
        grid: {
          color: 'rgb(181, 181, 181)',
        },
      },
      y: {
        min: 5,
        max: 25,
        ticks: {
          stepSize: 5,
        //   callback: value => {
        //     const lables = [50, 100, 150, 200, 250];
        //     return lables.includes(value) ? `${value}°C` : '';
        //   },
        },
        grid: {
          color: 'rgb(181, 181, 181)',
        },
      },
    },
  };

  return (
    <section className={'forecast'}>
      <div className="container">
        <div
          style={{
            backgroundColor: 'rgb(232, 232, 232)',
            padding: '0 40px 40px 43px',
            borderRadius: '20px',
          }}
        >
          <Line data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default Forecast;
