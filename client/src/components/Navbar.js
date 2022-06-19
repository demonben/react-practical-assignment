import React from "react";
import styles from "./Navbar.module.css";


const NavBar = ({user,logout}) => {
  return (
    <div>
      {" "}
      <div>
        <div className={styles.Navbar}>
          <h3>Chat</h3>
          <div className={styles.UserIcon}>
            {user.substring(0, 1)}
          </div>
          <button className={styles.LogOutButton}
           onClick={logout}
           >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
