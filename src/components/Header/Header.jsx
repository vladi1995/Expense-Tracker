import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";


export default function Header() {
  return (
    <>
      <div className={styles.topnav}>
        
        <div className={styles.leftnav}>
          <NavLink className={({isActive}) => isActive ? styles.active : ''} to="/">Home</NavLink>
          <a href="#news">Expense Tracker</a>
          <a href="#about">About</a>
        </div>


        <div className={styles.rightnav}>
          <NavLink className={({isActive}) => isActive ? styles.active : ''} to="/login">Login</NavLink>
          <NavLink className={({isActive}) => isActive ? styles.active : ''} to="/register">Register</NavLink>
          <NavLink to="#news">Logout</NavLink>
        </div>
      </div>
    </>
  );
}
