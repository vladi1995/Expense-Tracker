// eslint-disable-next-line no-unused-vars
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import validateInfo from "../../util/validateInfo";
import styles from "./Register.module.css";

export default function Register() {
  const registerValues = {
    Email: 'email',
    Password: 'password',
    RepeatPassword: 'repeat-password',
  };

  const { onRegisterSubmit, serverError } = useAuthContext();

  const {values, onChangeValues, onSubmit, errors} = useForm({
    [registerValues.Email]: '',
    [registerValues.Password]: '',
    [registerValues.RepeatPassword]: '',
  }, onRegisterSubmit, validateInfo);

  return (
    <section className={`${styles['container-register']}`}>
      <h1>Register</h1>
      <article className={`${styles["container-info"]}`}>
        <div className={styles.img}>
          <img src="/login-icon.png" alt="logo-login" />
        </div>
        <div>
          <form className={`${styles["register-form"]}`} method="post" onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                className={`${styles["expenses"]}`}
                name={registerValues.Email}
                value={values[registerValues.Email]}
                onChange={onChangeValues}
                placeholder="Email"
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
              />
            </div>

            <button type="submit" className={`${styles["btn-register"]}`}>
              Register
            </button>

            {serverError && <p className={`${styles['errors-paragraph']}`}>{serverError}</p>}
            {errors[registerValues.Email] && <p className={`${styles['errors-paragraph']}`}>{errors[registerValues.Email]}</p>}
            {errors[registerValues.Password] && <p className={`${styles['errors-paragraph']}`}>{errors[registerValues.Password]}</p>}
            {errors[registerValues.RepeatPassword] && <p className={`${styles['errors-paragraph']}`}>{errors[registerValues.RepeatPassword]}</p>}
          </form>
        </div>
      </article>
    </section>
  );
}
