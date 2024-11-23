import WeatherCard from 'components/WeatherCard/WeatherCard';
import css from './WeatherList.module.scss';
import { useWeather } from 'contexts/weatherContext';

const WeatherList = ({ weather, setIsDetailed }) => {
  // console.log(weather);
  return (
    <section className={css.weather}>
      <ul className={css.weather__list}>
        {weather.forecast &&
          weather.forecast.forecastday.map(day => {
            const currentHours = new Date().getHours();
            return (
              <WeatherCard
                temp={day.hour[currentHours].temp_c}
                date={day.hour[currentHours].time}
                city={weather.location.name}
                country={weather.location.country}
                icon={`https:${day.day.condition.icon}`}
                desciption={day.day.condition.text}
                cb={setIsDetailed}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default WeatherList;
