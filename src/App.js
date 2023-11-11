import "./App.css";
import react, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Favorites from "./components/Favorites/Favorites";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Loader from "./components/Loader";
import Location from "./components/Location/Location";
import { getDataByCity } from "./services/api";

function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");
  const [display, setDisplay] = useState("location");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) return;
    fetchApi();
  }, [city]);

  const fetchApi = async () => {
    try {
      const response = await getDataByCity(city)
      setData(response);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <NavBar setDisplay={setDisplay} />
      <Location
        display={display === "location"}
        setLoading={setLoading}
        data={data}
      />
      <Search
        display={display === "search"}
        setCity={setCity}
        setLoading={setLoading}
        data={data}
      />
      <Favorites display={display === "favorites"} />
    </div>
  );
}

export default App;
