import { useCallback, useState } from 'react';
import SearchIcon from '../../imgs/search.png';
import css from './Hero.module.scss';
// import { useWeather } from 'contexts/weatherContext';

const Hero = ({ setLocation }) => {
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
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const setLocationFromInputValue = evt => {
    evt.preventDefault();
    setLocation(evt.target.elements.location.value);
  };

  return (
    <section className={css.hero}>
      <div className={'container'}>
        <h1 className={css.hero__title}>Weather dashboard</h1>
        <ul className={css.hero__list}>
          <li className={css.hero__item}>
            <p className={css.hero__text}>
              Create your personal list of favorite cities and always be aware
              of the weather.
            </p>
          </li>
          <li className={css.hero__item}>
            <p className={css.hero__text}>
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}{' '}
              <br /> {weekdays[currentDate.getDay()]},{' '}
              {`${currentDate.getDate()}${
                currentDate.getDate() === 1
                  ? 'st'
                  : currentDate.getDate() === 2
                  ? 'nd'
                  : currentDate.getDate() === 3
                  ? 'rd'
                  : 'th'
              }`}
            </p>
          </li>
        </ul>
        <form
          className={css['hero__form']}
          onSubmit={setLocationFromInputValue}
        >
          <input
            className={css.hero__input}
            placeholder="Search location..."
            type="text"
            name="location"
          />
          <button className={css.hero__btn} type="submit">
            <img
              className={css.hero__icon}
              src={SearchIcon}
              alt="search icon"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
