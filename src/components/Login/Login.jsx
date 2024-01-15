// eslint-disable-next-line no-unused-vars
import styles from "./Login.module.css";

export default function Login() {
  return (
    <section className={styles.container}>
      <h1>Login</h1>
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

            <button type="submit" className={`${styles["btn-login"]}`}>
              Login
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
