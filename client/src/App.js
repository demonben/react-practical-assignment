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
    }
  }, []);

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
