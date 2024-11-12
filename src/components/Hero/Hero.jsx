import { useRef } from 'react';
import css from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.container}>
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
              October 2023 <br /> Friday, 13th
            </p>
          </li>
        </ul>
        <form className={css['hero__form']}>
          <input
            className={css.hero__input}
            placeholder="Search location..."
            type="text"
            name="location"
          />
          <button className={css.hero__btn} type="submit">
            <img className={css.hero__icon} src={'lo'} alt="search icon" />
          </button>
        </form>
      </div>
    </section>
  );
};
