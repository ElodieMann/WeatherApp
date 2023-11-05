import "./App.css";
import react, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./components/Favorites";
import MyLocation from "./components/MyLocation";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState('metric')

  useEffect(() => {
    fetchApi();
  }, [city, temp]);

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${temp}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74&cnt=7`
      );

      setData(response.data)
    } catch (e) {
      console.log(e);
    }
  };

console.log(city);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<MyLocation data={data} setCity={setCity} />} />
          <Route path="/search" element={<Search data={data} setCity={setCity}/>} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
