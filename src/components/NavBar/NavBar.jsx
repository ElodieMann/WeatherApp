import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { LOCATION, SEARCH, FAVORITES } from "../../config/keys";
import styles from "./NavBar.module.scss";


const NavBar = ({setDisplay}) => {
  return (
    <div>
      <div className={styles.navbar}>
        <FontAwesomeIcon className={styles.sunIcon} icon={faSun} />
        <h1>WeatherApp</h1>

        <nav>
          <button className={styles.btnNav} onClick={() => setDisplay(LOCATION)}>
            My Location
          </button>
          <button className={styles.btnNav} onClick={() => setDisplay(SEARCH)}>
            Search By City
          </button >
          <button className={styles.btnNav} onClick={() => setDisplay(FAVORITES)}>
            My Favorites
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
