import css from './ModalLogin.module.scss';

 const ModalLogin = ({open}) => {
    return (
        <>
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
              onClick={open}
            >
              Sign up
            </button>
            <p className={css.modal__text}>Already have an account? Log In</p>
          </form>
        </div>
        </>
    );
};


export default ModalLogin;