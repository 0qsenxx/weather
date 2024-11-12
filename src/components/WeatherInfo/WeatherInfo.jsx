import styles from './WeatherInfo.module.scss';

const WeatherInfo = () => {
  return (
    <section className={styles.weatherInfo}>
      <div className="container">
        <div className={styles.weatherBox}>
          <ul className={styles.weatherInfoList}>
            <li className={styles.weatherInfoItem}>
              <p className={styles.weatherInfoSubtitle}>Feels like</p>
              <h2 className={styles.weatherInfoTitle}>29.2°C</h2>
            </li>
            <li className={styles.weatherInfoItem}>
              <div className={styles.weatherInfoMinBox}>
                <p className={styles.weatherInfoSubtitle}>Min °C</p>
                <h2 className={styles.weatherInfoTitle}>27.9 °C</h2>
              </div>
              <div className={styles.weatherInfoMaxBox}>
                <p className={styles.weatherInfoSubtitle}>Max °C</p>
                <h2 className={styles.weatherInfoTitle}>27.9 °C</h2>
              </div>
            </li>
            <li className={styles.weatherInfoItem}>
              <p className={styles.weatherInfoSubtitle}>Humidity</p>
              <h2 className={styles.weatherInfoTitle}>59%</h2>
            </li>
            <li className={styles.weatherInfoItem}>
              <p className={styles.weatherInfoSubtitle}>Pressure</p>
              <h2 className={styles.weatherInfoTitle}>1007 Pa</h2>
            </li>
            <li className={styles.weatherInfoItem}>
              <p className={styles.weatherInfoSubtitle}>Wind speed</p>
              <h2 className={styles.weatherInfoTitle}>3.17 m/s</h2>
            </li>
            <li className={styles.weatherInfoItem}>
              <p className={styles.weatherInfoSubtitle}>Visibility</p>
              <h2 className={styles.weatherInfoTitle}>Unlimited</h2>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WeatherInfo;
