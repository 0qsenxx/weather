import { useState, useEffect } from 'react';
import styles from './WeatherChart.module.scss';
import React from 'react';
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

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherChart = ({ chartDetails }) => {
  const { width } = useWindowSize();
  const chartDimensions = {
    width: '100%',
    height: width >= 654 ? 300 : 200,
    displayLabels: width >= 654 ? true : false,
  };
  console.log(chartDetails);

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
    ].filter((_, index) => chartDimensions.displayLabels || index % 3 === 0),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: chartDetails.map(temperature => temperature.temp_c),
        borderColor: '#f4a261',
        backgroundColor: 'rgba(244, 162, 97, 0.2)',
        fill: false,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Hourly forecast',
        align: 'start',
        color: 'rgb(0, 0, 0)',
        padding: 20,
        font: {
          family: 'Montserrat',
          size: 16,
          color: 'rgb(0, 0, 0)',
        },
      },
    },
    scales: {
      x: {
        position: 'top',
        grid: {
          color: 'rgb(181, 181, 181)',
        },
        ticks: {
          maxTicksLimit: chartDimensions.displayLabels ? 9 : 5, // Adjust max ticks based on screen size
        },
      },
      y: {
        min: 5,
        max: 25,
        ticks: {
          stepSize: 5,
        },
        grid: {
          color: 'rgb(181, 181, 181)',
        },
      },
    },
  };

  return (
    <section className={styles.weatherChart}>
      <div className="container">
        <div
          className={styles.weatherChartBox}
          style={{
            width: chartDimensions.width,
          }}
        >
          <Line data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default WeatherChart;
