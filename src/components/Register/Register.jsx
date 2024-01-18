// eslint-disable-next-line no-unused-vars
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import styles from "./Register.module.css";

export default function Register() {
  const registerValues = {
    Email: 'email',
    Password: 'password',
    RepeatPassword: 'repeat-password',
  };

  const { onRegisterSubmit } = useAuthContext();

  const {values, onChangeValues, onSubmit} = useForm({
    [registerValues.Email]: '',
    [registerValues.Password]: '',
    [registerValues.RepeatPassword]: '',
  }, onRegisterSubmit);

  return (
    <section className={`${styles['container-register']}`}>
      <h1>Register</h1>
      <article className={`${styles["container-info"]}`}>
        <div className={styles.img}>
          <img src="/login-icon.png" alt="logo-login" />
        </div>
        <div>
          <form className={`${styles["login-form"]}`} method="post" onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                className={`${styles["expenses"]}`}
                name={registerValues.Email}
                value={values[registerValues.Email]}
                onChange={onChangeValues}
                placeholder="Email"
                required
              />
            </div>

            <div>
              <input
                type="password"
                className={`${styles["expenses"]}`}
                name={registerValues.Password}
                value={values[registerValues.Password]}
                onChange={onChangeValues}
                placeholder="Password..."
                required
              />
            </div>

            <div>
              <input
                type="password"
                className={`${styles["expenses"]}`}
                name={registerValues.RepeatPassword}
                value={values[registerValues.RepeatPassword]}
                onChange={onChangeValues}
                placeholder="Confirm-password..."
                required
              />
            </div>

            <button type="submit" className={`${styles["btn-login"]}`}>
              Register
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
