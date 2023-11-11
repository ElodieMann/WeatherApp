import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getDataByCity } from "../../services/api";

const Location = ({ display, setLoading, loading }) => {
  const [location, setLocation] = useState("");
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
            setLocation(
              data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.county
            );
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
    <div>{data && <Card data={data} loading={loading} />}</div>
  ) : null;
};

export default Location;
