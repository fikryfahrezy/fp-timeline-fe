import { Link } from 'react-router-dom';
import style from './Login.module.css';

function Login() {
  /**
   *
   * @param {import('react').FormEvent<HTMLFormElement>} e
   */
  const onSubmit = function onSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    console.log(data);
  };

  return (
    <div className={`${style.background} ${style.container}`}>
      <main className={style.main}>
        <h1 className={style.formTitle}>Final Project Timeline</h1>
        <form className={style.form} onSubmit={onSubmit}>
          <label htmlFor="username" className={style.formLabel}>
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="..."
            className={style.formInput}
          />
          <label htmlFor="password" className={style.formLabel}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="..."
            className={style.formInput}
          />
          <div className={style.formBtnGroup}>
            <Link to="/register" className={`${style.mr25} ${style.formTextLink}`}>
              Sign Up
            </Link>
            <button type="submit" className={style.formSubmitBtn}>
              Log In
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
