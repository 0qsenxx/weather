import css from './ModalLogin.module.scss';

 const ModalLogin = ({open}) => {

  const login = (e) => {
    // e.preventDefault();
    const user = {
     name: e.target.elements.name.value,
     password: e.target.elements.password.value,
     email: e.target.elements.name.value,
    };

    localStorage.setItem("user", JSON.stringify(user));
    console.log(JSON.parse(localStorage.getItem("user")));
  };

    return (
        <>
        <div className={css.backdrop} >
          <form className={css.modal} onSubmit={login}>
            <h2 className={css.modal__title}>Sign up</h2>
            <ul className={css.modal__list}>
              <li className={css.modal__item}>
                <p className={css.modal__text}>Username</p>
                <input
                  placeholder="Username"
                  name="name"
                  className={css.modal__input}
                ></input>
              </li>
              <li className={css.modal__item}>
                <p className={css.modal__text}>E-Mail</p>
                <input
                name="email"
                  placeholder="E-Mail"
                  type="email"
                  className={css.modal__input}
                ></input>
              </li>
              <li className={css.modal__item}>
                <p className={css.modal__text}>Password</p>
                <input
                name="password"
                  placeholder="Password"
                  type="password"
                  className={css.modal__input}
                ></input>
              </li>
            </ul>
            <button
              type="submit"
              className={css.signup__button}
              // onClick={open}
              onSubmit={login}
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