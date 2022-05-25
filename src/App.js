import logo from "./logo.svg";

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/about";
import React, { useState } from "react";
import Alert from "./components/alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert} />
      <div className="container my-3">
        {
          /* <Switch>
            {/* <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">*/
          <TextForm
            showAlert={showAlert}
            heading="Enter the text to analyze below"
            mode={mode}
          />
        }
      </div>

      {/* </Route>  */}
      {/* // </Switch>  */}
      {/* </Router> */}
    </>
  );
}

export default App;
