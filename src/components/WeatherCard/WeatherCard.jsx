// import { useWeather } from 'contexts/weatherContext';
import css from './WeatherCard.module.scss';

const WeatherCard = () => {
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
        <p className={css.day__date}>13.10.2023</p>
        <p className={css.day__weekday}>Friday</p>
      </div>
      <img src={'lalal'} alt={'lalal'} className={css.weather__icon} />
      <p className={css['weather__text--xl']}>22℃</p>
      <ul className={css['menu']}>
        <li className={css.menu__item}>
          <button className={css['menu__btn--xs']}>
            <img className={css.menu__pic} src={'lala'} alt={'lala'} />
          </button>
        </li>
        <li className={css.menu__item}>
          <button className={css['menu__btn--xs']}>
            <img className={css.menu__pic} src={'lala'} alt={'lala'} />
          </button>
        </li>
        <li className={css.menu__item}>
          <button className={css['menu__btn--tiny']}>See more</button>
        </li>
        <li className={css.menu__item}>
          <button className={css['menu__btn--xs']}>
            <img className={css.menu__pic} src={'l'} alt={'lal'} />
          </button>
        </li>
      </ul>
    </li>
  );
};

export default WeatherCard;
