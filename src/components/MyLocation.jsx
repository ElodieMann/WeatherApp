import React, { useEffect, useState } from "react";
import Card from "./Card/Card";


const MyLocation = ({ data, setCity }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);

            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            );
            const data = await response.json();
            if (data.address) {
              setCity(
                data.address.city ||
                  data.address.town ||
                  data.address.village ||
                  data.address.county
              );
            }
          });
        } else {
          console.error(
            "La géolocalisation n'est pas prise en charge par ce navigateur."
          );
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de la géolocalisation :",
          error
        );
      }
    };

    fetchLocation();
  }, []);
 console.log(data);
  return <Card data={data} />;
};

export default MyLocation;
