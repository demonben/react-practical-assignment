import { useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <LoginPage />
      {/* <MainPage /> */}
    </div>
  );
}

export default App;
