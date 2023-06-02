// import About from "./component/About";
import Navbar from "./component/navbar";
import Form from "./component/textform";
import {
  Routes,
  Route,
  // Link
} from "react-router-dom";
import "./App.css";
import { useState } from "react";
import About from "./component/About"
import Alert from "./Alert";
let callCount = 1;
function App() {
  const [dark, setDark] = useState("light");
  const [alert, setAlert] = useState(null);
  function timer() {
    if (callCount * 1500 > 6000) {
      callCount = 1;
      return callCount * 1500;
    } else {
      return callCount * 1500;
    }
  }
  const showAlert = (type, message, display) => {
    setAlert({
      type: type,
      message: message,
      display: display,
    });
    callCount += 1;
    console.log(callCount * 1500);
    setTimeout(() => {
      setAlert(null);
    }, timer());
  };
  const toggleBtn = (event) => {
    if (event.target.checked) {
      setDark("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
      showAlert("success", "Dark mode is enabled", "block");
    } else {
      setDark("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("success", "Light mode is enabled", "block");
    }
  };
  return (
    <>
      <Navbar title="MY-app" toggle={toggleBtn} mode={dark} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Form mode={dark} showAlert={showAlert} />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
