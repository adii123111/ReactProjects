import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";


function App() {
  const [mode, setDarkMode] = useState("light");
  const [greenmode, setGreenMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typee: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleModeGreen = () => {
    if (greenmode === "light") {
      setGreenMode("#201E43");
      document.body.style.backgroundColor = "#3A1078";
      showAlert("Blue mode has been enabled", "success");
    } else {
      setGreenMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const togglemode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Text-Utils Dark mode'
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'Text-Utils Light mode'
    }
  };

  return (
    <>
    
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={togglemode}
        about="About TextUtils"
        greenmode={greenmode}
        toggleModeGreen={toggleModeGreen}
      />
      <Alert alert={alert} />
      <div className="container my-3">

        {/* <Details/>  */}
        
        
          <TextForm mode={mode}showAlert={showAlert}heading="Enter the Text to analyze below"/>
            

        </div>
      

    </>
  );
}
export default App;