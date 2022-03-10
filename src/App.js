import { useEffect, useState } from "react";
import axiosInstance from "./helpers/axios";
import callToApi from './helpers/CallToApi'
import logo from "./logo.svg";
import "./App.css";
import Busines from "./components/Bussines";

function App() {
  const [locations, setLocations] = useState("LosAngeles");
  const [bs,setBs] = useState([])
  useEffect(() => {

    callToApi(locations, setBs)

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Busines data={bs}/>
      </header>
    </div>
  );
}

export default App;
