import ForecastItem from '../ForecastItem/ForecastItem';
import styles from './Forecast.module.scss';

const Forecast = () => {
  return (
    <section className={styles.forecast}>
      <div className="container">
        <div className={styles.forecastBox}>
          <h2 className={styles.forecastTitle}>8-day forecast</h2>
          <ul className={styles.forecastList}>
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Forecast;
