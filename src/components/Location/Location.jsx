import Card from "../Card/Card";
import Loader from "../Loader";
import React, { useEffect, useState } from "react";
import { getDataByCity } from "../../services/api";

const Location = ({ display }) => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    if (location) getDataLocation();
  }, [location]);

  const getDataLocation = async () => {
    try {
      const res = await getDataByCity(location);
      setData(res);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const fetchLocation = async () => {
    setLoading(true);
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          );
          const data = await response.json();
          if (data.address) {
            const cityName =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.county;
            setLocation(cityName);
          }
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    } catch (error) {
      console.error("Error retrieving geolocation :", error);
    }
  };
  return display ? (
    <div>{loading ? <Loader /> : <Card data={data} />}</div>
  ) : null;
};

export default Location;
