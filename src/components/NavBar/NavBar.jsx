import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavBar.module.scss";


const NavBar = ({setDisplay}) => {
  return (
    <div>
      <div className={styles.navbar}>
        <FontAwesomeIcon className={styles.sunIcon} icon={faSun} />
        <h1>WeatherApp</h1>

        <nav>
          <button className={styles.btnNav} onClick={() => setDisplay('location')}>
            My Location
          </button>
          <button className={styles.btnNav} onClick={() => setDisplay('search')}>
            Search By City
          </button >
          <button className={styles.btnNav} onClick={() => setDisplay('favorites')}>
            My Favorites
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
