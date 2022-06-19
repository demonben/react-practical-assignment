import React from "react";

const LoginPage = ({ user, handleChange, onSubmitLogin }) => {
  return (
    <div>
      <div>
        {" "}
        <label className="form-label">User Name</label>
        <input
          type="text"
          name="user"
          value={user}
          onChange={handleChange}
          className="form-input"
        ></input>
        <button type="submit" className="btn btn-block" onClick={onSubmitLogin}>
          Submit{" "}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
