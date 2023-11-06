import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faHeartCirclePlus,
  faWind,
  faDroplet,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.scss";

const Card = ({ data }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedTime = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    return formattedTime;
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <h1>
          {data?.city?.name}, {data?.city?.country}
        </h1>
        <h2>{data?.list?.[0].weather[0].description} </h2>
        <h2>{data?.list?.[0].main.temp} °C</h2>

        <img
          src={`https://openweathermap.org/img/wn/${data?.list?.[0].weather[0].icon}@2x.png`}
          alt=""
        />

        <div>
          <p>Sunrise : {data?.city?.sunrise}</p>
          <p>Sunset : {data?.city?.sunset}</p>
        </div>
        <p>
          <FontAwesomeIcon icon={faWind} /> {data?.list?.[0].wind?.speed} km/h{" "}
          <span>Wind</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faDroplet} /> {data?.list?.[0].main?.humidity}{" "}
          % <span>Humidity</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faEye} /> {data?.list?.[0].visibility} km{" "}
          <span>Visibility</span>
        </p>
        <p>
              <FontAwesomeIcon icon={faArrowDown} /> {data?.list?.[0].main.temp_min} °C ||{" "}
              <FontAwesomeIcon icon={faArrowUp} /> {data?.list?.[0].main.temp_max} °C
            </p>
      </div>
      <div className={styles.cardBottom}>
      <h3>Today</h3>
      <ul >
        {data?.list?.slice(1).map((day, index) => (
          <li key={index}>
            <p>{formatDate(day.dt_txt)}</p>
            <img
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt=""
        />
                 <p>{day.main.temp}°C </p>

          </li>
        ))}
      </ul>
      </div>
      <button>
        <FontAwesomeIcon icon={faHeartCirclePlus} />
      </button>
    </div>
  );
};

export default Card;
