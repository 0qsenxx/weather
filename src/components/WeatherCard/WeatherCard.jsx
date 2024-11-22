import { useWeather } from 'contexts/weatherContext';
import HeartIcon from '../../imgs/weatherCardIcons/heart.svg';
import DeleteIcon from '../../imgs/weatherCardIcons/delete.svg';
import RefreshIcon from '../../imgs/weatherCardIcons/refresh.svg';
import WeatherIcon from '../../imgs/icons/cloud1snow.png';
import css from './WeatherCard.module.scss';

const WeatherCard = () => {
  const currentDate = new Date();
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <li className={css.weather__item}>
      <div className={css['weather-box']}>
        <p className={css.weather__text}>Prague</p>
        <p className={css.weather__text}>Czech Republic</p>
      </div>
      <time className={css['weather__text--lg']}>14:00</time>
      <button type="button" className={css.weather__btn}>
        Hourly forecast
      </button>
      <div className={css.day}>
        <p
          className={css.day__date}
        >{`${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`}</p>
        <p className={css.day__weekday}>{weekdays[currentDate.getDay()]}</p>
      </div>
      <img src={WeatherIcon} alt={''} className={css.weather__icon} />
      <p className={css['weather__text--xl']}>22°C</p>
      <ul className={css['weather-card__list']}>
        <li className={css['weather-card__item']}>
          <button className={css['weather__btn--xs']} type="button">
            <img
              className={css.weather__pic}
              src={RefreshIcon}
              alt="refresh icon"
            />
          </button>
        </li>
        <li className={css['weather-card__item']}>
          <button className={css['weather__btn--xs']} type="button">
            <img
              className={css.weather__pic}
              src={HeartIcon}
              alt="heart icon"
            />
          </button>
        </li>
        <li
          className={`${css['weather-card__item']} ${css['weather-card__btn']}`}
        >
          <button className={css['weather__btn--tiny']} type="button">
            See more
          </button>
        </li>
        <li className={css['weather-card__item']}>
          <button className={css['weather__btn--xs']} type="button">
            <img
              className={css.weather__pic}
              src={DeleteIcon}
              alt="delete icon"
            />
          </button>
        </li>
      </ul>
    </li>
  );
};

export default WeatherCard;
