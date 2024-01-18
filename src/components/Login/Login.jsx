import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import validateInfo from "../../util/validateInfo";
// eslint-disable-next-line no-unused-vars
import styles from "./Login.module.css";

const loginValues = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const { onLoginSubmit } = useAuthContext();

  const { values, onChangeValues, onSubmit, errors } = useForm({
    [loginValues.Email]: '',
    [loginValues.Password]: '',
  }, onLoginSubmit, validateInfo);

  return (
    <section className={`${styles["container-login"]}`}>
      <h1>Login</h1>
      <article className={`${styles["container-info"]}`}>
        <div className={styles.img}>
          <img src="/login-icon.png" alt="logo-login" />
        </div>
        <div className={`${styles['input-validate']}`}>
          <form className={`${styles['login-form']}`} method="POST" onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                className={`${errors[loginValues.Email] ? `${styles.invalid} ${styles.expenses}` : `${styles.expenses}`}`}
                name={loginValues.Email}
                value={values[loginValues.Email]}
                onChange={onChangeValues}
                placeholder="Email..."
              />
            </div>

            <div>
              <input
                type="password"
                className={`${errors[loginValues.Password] ? `${styles.invalid} ${styles.expenses}` : `${styles.expenses}`}`}
                name={loginValues.Password}
                value={values[loginValues.Password]}
                onChange={onChangeValues}
                placeholder="Password..."
              />
            </div>

            <button type="submit" className={`${styles["btn-login"]}`}>
              Login
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
