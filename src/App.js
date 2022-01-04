import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// let name = "<b>Sumit Vish</b>";    // we cannot use html tag inside the string,it will show as it is.
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install textUtils now'
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/* <Navbar title="Textutils" aboutText="About Textutils"/> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
      {/* react matches path partially so it is better to use "exact path"  */}
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter,character counter, Remove extra spaces" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}
export default App;


