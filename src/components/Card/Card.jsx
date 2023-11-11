import Loader from "../Loader";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCirclePlus,
  faWind,
  faDroplet,
  faEye,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../services/utiles";
import styles from "./Card.module.scss";

const Card = ({ data, loading }) => {
  const [favoritesList, setFavoritesList] = useState([]);
  const cardId = data?.city?.id;
  const isFavorite = favoritesList?.some(li => li.city.id === cardId)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites?.length > 0) {
      setFavoritesList(favorites);
    }
  }, []);



  const getBackgroundClass = (description) => {
    if (description) {
      const lowercaseDescription = description.toLowerCase();

      switch (true) {
        case lowercaseDescription.includes("clouds"):
          return styles.clouds;
        case lowercaseDescription.includes("rain"):
          return styles.rain;
        case lowercaseDescription.includes("clear") ||
          lowercaseDescription.includes("sun"):
          return styles.clear;
        case lowercaseDescription.includes("snow"):
          return styles.snow;
        case lowercaseDescription.includes("thunderstorm"):
          return styles.thunderstorm;
        case lowercaseDescription.includes("mist"):
          return styles.mist;
        default:
          return styles.default;
      }
    } else {
      return styles.default;
    }
  }

  const saveToLocalStorage = () => {
    let newFav = [];
    if (isFavorite) {
      newFav = favoritesList?.filter((li) => li.city.id !== cardId);
    } else {
      newFav = [...favoritesList, data];
      console.log(newFav);
    }
    setFavoritesList(newFav);
    localStorage.setItem("favorites", JSON.stringify(newFav));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.card}>
          <div
            className={`${styles.cardTop} ${getBackgroundClass(
              data?.list?.[0].weather[0].description
            )}`}
          >
            <h2>
              {data?.city?.name}, {data?.city?.country}
            </h2>
            <p style={{ textTransform: "capitalize" }}>
              {data?.list?.[0].weather[0].description}{" "}
            </p>
            <h1>{Math.round(data?.list?.[0].main.temp)}°</h1>

            <div className={styles.infoCard}>
              <p>
                <FontAwesomeIcon icon={faWind} /> {data?.list?.[0].wind?.speed}{" "}
                km/h <span>Wind</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faDroplet} />{" "}
                {data?.list?.[0].main?.humidity} % <span>Humidity</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faEye} /> {data?.list?.[0].visibility} km{" "}
                <span>Visibility</span>
              </p>
            </div>
          </div>
          <div className={styles.cardBottom}>
            <h3>Today</h3>
            <ul>
              {data?.list?.slice(1).map((day, index) => (
                <li key={index}>
                  <p>{formatDate(day.dt_txt)}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <p>{Math.round(day.main.temp)}°C </p>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={saveToLocalStorage}>
            {isFavorite ? (
              <FontAwesomeIcon icon={faTrash} />
            ) : (
              <FontAwesomeIcon icon={faHeartCirclePlus} />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default Card;
