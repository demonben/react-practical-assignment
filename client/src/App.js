import { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

const initialState = {
  user: "",
};

function App() {
  const [value, setValue] = useState(initialState);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsLogin(true);
      setValue({ ...value, user: localStorage.getItem("user") });
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault(e.target);
    if (value.user) {
      setIsLogin(true);
    }
    localStorage.setItem("user", value.user);
  };

  const logout = () => {
    setValue(initialState);
    setIsLogin(false)
    localStorage.setItem("user", initialState.user);
  };

  return (
    <div className="App">
      {!isLogin ? (
        <LoginPage
          onSubmitLogin={onSubmitLogin}
          handleChange={handleChange}
          user={value.user}
        />
      ) : (
        <MainPage user={value.user} logout={logout} />
      )}
    </div>
  );
}

export default App;
