import css from './Header.module.scss';
import { useState } from 'react';
import logo from './logo.png';
import user from './user.png';
import ModalLogin from 'components/modalLogin/ModalLogin';
// console.log(JSON.parse(localStorage.getItem('users'))[0].name);
const Header = ({ isLogin }) => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenBurger, setOpenBurger] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem('userData')
      ? JSON.parse(localStorage.getItem('userData')).username
      : ''
  );

  function isOpenModal() {
    setOpen(!isOpen);
    // if (e.key === "Escape") {
    //   document.addEventListener("keydown", setOpen(!isOpen));
    // }
  }

  function isOpenClickModal(e) {
    // setOpen(!isOpen);
    if (e.key === 'Escape') {
      setOpen(!isOpen);
    }
  }

  document.addEventListener('keydown', isOpenClickModal);

  function isOpenBurgerF() {
    setOpenBurger(!isOpenBurger);
  }

  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.header__logo}>
            <img src={logo} alt="logo" />
          </div>

          <button
            type="button"
            className={css.header__burgerBtn}
            onClick={isOpenBurgerF}
          >
            Menu
            {isOpenBurger ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
                className={css.header__burgerSvg}
              >
                <path
                  d="M1.24219 9.24268L5.48483 5.00004L1.24219 0.757395"
                  stroke="black"
                  stroke-linecap="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={css.header__burgerSvg}
              >
                <path
                  d="M1 1L5.24264 5.24264L9.48528 1"
                  stroke="black"
                  stroke-linecap="round"
                />
              </svg>
            )}
          </button>

          <nav className={css.header__nav}>
            <ul className={css.header__navList}>
              <li className={css.header__navItem}>
                <a className={css.header__navPage} href="../App.jsx">
                  Who we are
                </a>
              </li>
              <li className={css.header__navItem}>
                <a className={css.header__navPage} href="../App.jsx">
                  Contacts
                </a>
              </li>
              <li className={css.header__navItem}>
                <a className={css.header__navPage} href="../App.jsx">
                  Menu
                </a>
              </li>
            </ul>
          </nav>

          <div className={css.header__signup}>
            {username ? (
              <p>{JSON.parse(localStorage.getItem('userData')).username}</p>
            ) : (
              <button
                type="button"
                className={css.signup__button}
                onClick={isOpenModal}
              >
                Sign Up
              </button>
            )}
            {/* <button
              type="button"
              className={css.signup__button}
              onClick={isOpenModal}
            >
              Sign Up
            </button> */}
            <div className={css.signup__user}>
              <img src={user} alt="userImg" />
            </div>
          </div>
        </div>
      </header>

      {isOpenBurger ? (
        <div className={css.burger}>
          <ul className={css.header__navList}>
            <li className={css.header__navItem}>
              <a className={css.header__navPage} href="../App.jsx">
                Who we are
              </a>
            </li>
            <li className={css.header__navItem}>
              <a className={css.header__navPage} href="../App.jsx">
                Contacts
              </a>
            </li>
            <li className={css.header__navItem}>
              <a className={css.header__navPage} href="../App.jsx">
                Menu
              </a>
            </li>
          </ul>

          {/* {useEffect(() => {
            JSON.parse(localStorage.getItem("users")).length >= 1 ?
            <p>{JSON.parse(localStorage.getItem("users"))[0].name}</p> : */}
          <div className={css.burger__signup}>
            <div className={css.signup__user}>
              <img src={user} />
            </div>
            {username ? (
              <p>{JSON.parse(localStorage.getItem('userData')).username}</p>
            ) : (
              <button
              type="button"
              className={css.signup__button}
              onClick={isOpenModal}
            >
              Sign Up
            </button>
            )}
          
          </div>
          {/* // }, JSON.parse(localStorage.getItem("users")) )} */}
        </div>
      ) : (
        console.log('hide')
      )}

      {isOpen ? (
        <ModalLogin open={isOpenModal} setUsername={setUsername}/>
      ) : (
        console.log('hide')
      )}
    </>
  );
};

export default Header;
