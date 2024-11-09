import css from './App.module.css';
import { useState } from 'react';

const Header = () => {

    const [isOpen, setOpen] = useState(false);


    function isOpenModal() {
      setOpen(!isOpen);
    };
    
    
      return (
        <>
          <header className={css.header}>
            <div className={css.header__logo} >
    
            </div>
            <nav className={css.header__nav}>
              <ul className={css.header__navList}>
                <li className={css.header__navItem}>
                  <a className={css.header__navPage}>
                    Who we are
                  </a>
                </li>
                <li className={css.header__navItem}>
                  <a className={css.header__navPage}>
                    Contacts
                  </a>
                </li>
                <li className={css.header__navItem}>
                  <a className={css.header__navPage}>
                    Menu
                  </a>
                </li>
              </ul>
            </nav>
            <div className={css.header__signup}>
              <button type='button' className={css.signup__button} onClick={isOpenModal}>Sign Up</button>
              <div className={css.signup__user}></div>
            </div>
          </header>
    
    
          {isOpen ?
            <div className={css.backdrop}>
              <form className={css.modal}>
                <h1 className={css.modal__title}>Sign up</h1>
                <ul className={css.modal__list}>
                  <li className={css.modal__item}>
                    <p className={css.modal__text}>Username</p>
                    <input placeholder='Username' className={css.modal__input}></input>
                  </li>
                  <li className={css.modal__item}>
                    <p className={css.modal__text}>E-Mail</p>
                    <input placeholder='E-Mail' type='email' className={css.modal__input}></input>
                  </li>
                  <li className={css.modal__item}>
                    <p className={css.modal__text}>Password</p>
                    <input placeholder='Password' type='password' className={css.modal__input}></input>
                  </li>
                </ul>
                <button type="submit" className={css.signup__button} onClick={isOpenModal}>Sign up</button>
                <p className={css.modal__text}>Already have an account? Log In</p>
              </form>
            </div>
    
            :
            console.log("hide")
    
          }
    
    
        </>
      );
};

export default Header;
