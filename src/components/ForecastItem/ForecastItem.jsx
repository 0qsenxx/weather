import css from './ForecastItem.module.scss';
import lightRainImg from '../../imgs/icons/lightRain.png';

const ForecastItem = () => {
  return (
    <li className={css.forecastItem}>
      <p className={`${css.forecastText} ${css.forecastDate}`}>Fri, Oct 13</p>
      <div className={css.forecastItemBox}>
        <img className={css.forecastIcon} src={lightRainImg} alt={'l'} />
        <p className={css.forecastText}>23/14℃</p>
      </div>
      <p className={`${css.forecastText} ${css.forecastWeatherText}`}>light rain</p>
    </li>
  );
};

export default ForecastItem;
