import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown,faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Card = ({ data }) => {
  return (
    <div>
      <h1>
        {data?.city?.name}, {data?.city?.country}
      </h1>
      <div>
        <h3>Sunrise :  {data?.city?.sunrise}</h3>
        <h3>Sunset :  {data?.city?.sunset}</h3>
      </div>

<ul>
      {data?.list?.map(day => (
        <li>
            <p>{day.dt_txt}</p>
            <p>{day.main.temp}°C </p>
            <p><FontAwesomeIcon icon={faArrowDown}/> {day.main.temp_min} °C  || <FontAwesomeIcon icon={faArrowUp} /> {day.main.temp_max} °C</p>
        </li>
      ))}

</ul>
    </div>
  );
};

export default Card;
