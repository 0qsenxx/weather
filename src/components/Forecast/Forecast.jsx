import { useEffect, useState, useCallback } from 'react';
import ForecastItem from '../ForecastItem/ForecastItem';
import styles from './Forecast.module.scss';
import getWeather from 'utils/getWeather';

const Forecast = ({ location }) => {
  // console.log(forecast, "comppppooo");
  const [forecast, setForecast] = useState({});
  // const getForecast = useCallback(async () => {
  //   const weather = await getWeather(location, '8');
  //   console.log('forecast', weather.forecast);
  //   setForecast(weather.forecast);
  // });
  useEffect(() => {
    const getForecast = async () => {
      const weather = await getWeather(location, '8');
      setForecast(weather.forecast);
    };
    const data = getForecast();
    // console.log(data, 'forecamp');
    // setForecast(data);
  }, []);
  return (
    <section className={styles.forecast}>
      <div className="container">
        <div className={styles.forecastBox}>
          <h2 className={styles.forecastTitle}>8-day forecast</h2>
          <ul className={styles.forecastList}>
            {forecast.forecastday &&
              forecast.forecastday.map(dayForecast => (
                <ForecastItem data={dayForecast} />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Forecast;
