import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.topnav}>
        
        <div className={styles.leftnav}>
          <a className={styles.active} href="#home">Home</a>
          <a href="#news">Expense Tracker</a>
          <a href="#about">About</a>
        </div>


        <div className={styles.rightnav}>
          <a href="#home">Login</a>
          <a href="#news">Register</a>
          <a href="#news">Logout</a>
        </div>
      </div>
    </>
  );
}
