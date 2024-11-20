import WeatherCard from 'components/WeatherCard/WeatherCard';
import css from './WeatherList.module.scss';

const WeatherList = () => {
  return (
    <section className={css.weather}>
      <ul className={css.weather__list}>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </ul>
    </section>
  );
};

export default WeatherList;
