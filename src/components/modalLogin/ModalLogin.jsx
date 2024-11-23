import css from './ModalLogin.module.scss';
const users = [];

const ModalLogin = ({ open  }) => {


const login = (e) => {
  // console.log(e.target.element.username.value)
  // e.preventDefault();
  const newUser = {
    name: e.target.elements.username.value,
    password: e.target.elements.password.value,
    email: e.target.elements.eMail.value,
  };
  users.push(newUser);
  
  localStorage.setItem("users", JSON.stringify(users));
  open();
};

  return (
    <>
      <div className={css.backdrop} >
        <form className={css.modal} onSubmit={login}>
          <h2 className={css.modal__title}>Sign up</h2>
          <button className={css.modal__close} onClick={open} type='button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M19.8332 8.16666L8.1665 19.8333M8.1665 8.16666L19.8332 19.8333" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <ul className={css.modal__list}>
            <li className={css.modal__item}>
              <p className={css.modal__text}>Username</p>
              <input
                placeholder="Username"
                name='username'
                className={css.modal__input}
              ></input>
            </li>
            <li className={css.modal__item}>
              <p className={css.modal__text}>E-Mail</p>
              <input
                placeholder="E-Mail"
                name='eMail'
                type="email"
                className={css.modal__input}
              ></input>
            </li>
            <li className={css.modal__item}>
              <p className={css.modal__text}>Password</p>
              <input
                placeholder="Password"
                name='password'
                type="password"
                className={css.modal__input}
              ></input>
            </li>
          </ul>
          <button
            type="submit"
            className={css.signup__button}
          // onClick={open}
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