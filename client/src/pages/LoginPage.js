import React from "react";
import styles from "../components/NewPostForm.module.css";

const LoginPage = ({ user, handleChange, onSubmitLogin }) => {
  return (
    <div>
      <form className={styles.Form}>
        {" "}
        <input
          type="text"
          placeholder=" Type your user name.."
          name="user"
          value={user}
          onChange={handleChange}
          className={styles.Input}
        ></input>
        <button type="submit" className={styles.Button} onClick={onSubmitLogin}>
          Login{" "}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
