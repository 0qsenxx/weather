import css from './ForecastItem.module.scss';

const ForecastItem = () => {
  return (
    <li className={css.forecast__item}>
      <p className={`${css.forecast__text} ${css.forecast__date}`}>
        Fri, Oct 13
      </p>
      <div className={css['forecast__item-box']}>
        <img className={css.forecast__icon} src={'lala'} alt={'l'} />
        <p className={css.forecast__item}
      </div>
    </li>
  );
};
