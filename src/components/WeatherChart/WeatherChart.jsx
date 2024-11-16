// // import React from 'react';
// import { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// // import { callback } from 'chart.js/dist/helpers/helpers.core';
// // import { callback } from 'chart.js/dist/helpers/helpers.core';
// // Реєструємо компоненти Chart.js
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const WeatherChart = () => {
//   const [chartSize, setChartSize] = useState({ width: 600, height: 400 });

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 654) {
//         setChartSize({ width: 300, height: 250 }); // Mobile view
//       } else if (width < 1170) {
//         setChartSize({ width: 500, height: 350 }); // Tablet view
//       } else {
//         setChartSize({ width: 600, height: 400 }); // Desktop view
//       }
//     };

//     handleResize(); // Call on mount to set initial size
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//   const data = {
//     labels: [
//       '11 pm',
//       '1 am',
//       '2 am',
//       '3 am',
//       '4 am',
//       '5 am',
//       '6 am',
//       '7 am',
//       '8 am',
//       '9 am',
//       '10 am',
//       '11 am',
//       '12 pm',
//       '1 pm',
//       '2 pm',
//       '3 pm',
//       '4 pm',
//       '5 pm',
//       '6 pm',
//     ],
//     datasets: [
//       {
//         label: 'Temperature (°C)',
//         data: [
//           15, 13, 12, 12, 12, 11, 11, 11, 12, 14, 16, 18, 20, 22, 23, 24, 24,
//           24, 24,
//         ],
//         borderColor: '#f4a261',
//         backgroundColor: 'rgba(244, 162, 97, 0.2)',
//         fill: false,
//         tension: 0.4,
//         borderWidth: 2,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: true,
//         text: 'Hourly forecast',
//         align: 'start',
//         color: 'rgb(0, 0, 0)',
//         padding: '20',
//         font: {
//           family: 'Montserrat',
//           size: 16,
//           color: 'rgb(0, 0, 0)',
//         },
//       },
//     },
//     scales: {
//       x: {
//         position: 'top',
//         grid: {
//           color: 'rgb(181, 181, 181)',
//         },
//       },
//       y: {
//         min: 5,
//         max: 25,
//         ticks: {
//           stepSize: 5,
//           //   callback: value => {
//           //     const lables = [50, 100, 150, 200, 250];
//           //     return lables.includes(value) ? `${value}°C` : '';
//           //   },
//         },
//         grid: {
//           color: 'rgb(181, 181, 181)',
//         },
//       },
//     },
//   };

//   return (
//     <section className={'forecast'}>
//       <div className="container">
//         <div
//           style={{
//             backgroundColor: 'rgb(232, 232, 232)',
//             padding: '0 40px 40px 43px',
//             borderRadius: '20px',
//           }}
//         >
//           <Line data={data} options={options} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WeatherChart;

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

const WeatherChart = () => {
  const { width } = useWindowSize(); // Get the current width of the screen

  // Define chart width and label settings based on breakpoints
  //   const chartDimensions = {
  //     width: width >= 1170 ? 900 : width >= 654 ? 600 : 300,
  //     height: width >= 654 ? 300 : 200,
  //     displayLabels: width >= 654 ? true : false, // Show fewer labels on smaller screens
  //   };
  const chartDimensions = {
    width: '100%',
    height: width >= 654 ? 300 : 200,
    displayLabels: width >= 654 ? true : false,
  };

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
    ].filter((_, index) => chartDimensions.displayLabels || index % 3 === 0), // Show fewer labels on mobile
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
    <section className={'forecast'}>
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
