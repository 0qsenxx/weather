import WeatherCard from 'components/WeatherCard/WeatherCard';
import css from './WeatherList.module.scss';

const WeatherList = () => {
  return (
    <section>
      <ul>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </ul>
    </section>
  );
};

export default WeatherList;
