import css from './ForecastItem.module.scss';
import lightRainImg from '../../imgs/icons/lightRain.png';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const ForecastItem = ({ data }) => {
  const date = new Date(data.date);
  return (
    <li className={css.forecastItem}>
      <p className={`${css.forecastText} ${css.forecastDate}`}>
        {weekdays[date.getDay()]}, {months[date.getMonth()]}
        {' ' + date.getDate()}
      </p>
      <div className={css.forecastItemBox}>
        <img
          className={css.forecastIcon}
          src={`https:${data.day.condition.icon}`}
          alt={data.day.condition.text}
        />
        <p className={css.forecastText}>
          {data.day.maxtemp_c}/{data.day.mintemp_c}°C
        </p>
      </div>
      <p className={`${css.forecastText} ${css.forecastWeatherText}`}>
        {data.day.condition.text.length >= 11
          ? data.day.condition.text.toLowerCase().slice(0, 11) + '..'
          : data.day.condition.text.toLowerCase()}
      </p>
    </li>
  );
};

export default ForecastItem;
