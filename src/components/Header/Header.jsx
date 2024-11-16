import css from './Header.module.scss';
import { useState } from 'react';
import logo from "./logo.png";
import user from "./user.png";

// console.log(window.style.width);

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenBurger, setOpenBurger] = useState(false);

  function isOpenModal() {
    setOpen(!isOpen);
    // if (e.key === "Escape") {
    //   document.addEventListener("keydown", setOpen(!isOpen));
    // }
  };

  function isOpenClickModal(e) {
    // setOpen(!isOpen);
    if (e.key === "Escape") {
      setOpen(!isOpen);
    }
  };

  document.addEventListener("keydown", isOpenClickModal);

  function isOpenBurgerF() {
    setOpenBurger(!isOpenBurger);
  };

  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.header__logo}>
            <img src={logo} />
          </div>


          <button type='button' className={css.header__burgerBtn} onClick={isOpenBurgerF}>Menu
            {isOpenBurger ?
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none" className={css.header__burgerSvg}>
                <path d="M1.24219 9.24268L5.48483 5.00004L1.24219 0.757395" stroke="black" stroke-linecap="round" />
              </svg>

              :
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none" className={css.header__burgerSvg}>
                <path d="M1 1L5.24264 5.24264L9.48528 1" stroke="black" stroke-linecap="round" />
              </svg>

            }
          </button>




          {isOpenBurger ?
             <div className={css.burger}>
             <ul className={css.header__navList}>
               <li className={css.header__navItem}>
                 <a className={css.header__navPage}>Who we are</a>
               </li>
               <li className={css.header__navItem}>
                 <a className={css.header__navPage}>Contacts</a>
               </li>
               <li className={css.header__navItem}>
                 <a className={css.header__navPage}>Menu</a>
               </li>
             </ul>
             <div className={css.burger__signup}>
               <button
                 type="button"
                 className={css.signup__button}
                 onClick={isOpenModal}
               >
                 Sign Up
               </button>
               <div className={css.signup__user}>
                 <img src={user} />
               </div>
             </div>
           </div>

            :
            console.log("hide")

          }



         



          <nav className={css.header__nav}>
            <ul className={css.header__navList}>
              <li className={css.header__navItem}>
                <a className={css.header__navPage}>Who we are</a>
              </li>
              <li className={css.header__navItem}>
                <a className={css.header__navPage}>Contacts</a>
              </li>
              <li className={css.header__navItem}>
                <a className={css.header__navPage}>Menu</a>
              </li>
            </ul>
          </nav>


          <div className={css.header__signup}>
            <button
              type="button"
              className={css.signup__button}
              onClick={isOpenModal}
            >
              Sign Up
            </button>
            <div className={css.signup__user}>
              <img src={user} />
            </div>
          </div>
        </div>
      </header>

      {isOpen ? (
        <div className={css.backdrop} >
          <form className={css.modal} >
            <h2 className={css.modal__title}>Sign up</h2>
            <ul className={css.modal__list}>
              <li className={css.modal__item}>
                <p className={css.modal__text}>Username</p>
                <input
                  placeholder="Username"
                  className={css.modal__input}
                ></input>
              </li>
              <li className={css.modal__item}>
                <p className={css.modal__text}>E-Mail</p>
                <input
                  placeholder="E-Mail"
                  type="email"
                  className={css.modal__input}
                ></input>
              </li>
              <li className={css.modal__item}>
                <p className={css.modal__text}>Password</p>
                <input
                  placeholder="Password"
                  type="password"
                  className={css.modal__input}
                ></input>
              </li>
            </ul>
            <button
              type="submit"
              className={css.signup__button}
              onClick={isOpenModal}
            >
              Sign up
            </button>
            <p className={css.modal__text}>Already have an account? Log In</p>
          </form>
        </div>
      ) : (
        console.log('hide')
      )}
    </>
  );
};

export default Header;
