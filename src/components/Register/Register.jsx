// eslint-disable-next-line no-unused-vars
import styles from "./Register.module.css";

export default function Register() {
  return (
    <section className={styles.container}>
      <h1>Register</h1>
      <article className={`${styles["container-info"]}`}>
        <div className={styles.img}>
          <img src="/login-icon.png" alt="logo-login" />
        </div>
        <div>
          <form className={`${styles["login-form"]}`}>
            <div>
              <input
                type="text"
                className={`${styles["expenses"]}`}
                placeholder="Email"
                required
              />
            </div>

            <div>
              <input
                type="password"
                className={`${styles["expenses"]}`}
                placeholder="Password..."
                required
              />
            </div>

            <div>
              <input
                type="password"
                className={`${styles["expenses"]}`}
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
