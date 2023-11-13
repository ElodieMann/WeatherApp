import React from "react";
import Card from "../Card/Card";
import styles from './Favorites.module.scss'

const Favorites = ({ display }) => {
  const savedCards = JSON.parse(localStorage.getItem("favorites")) || [];

  return display ? (
    <div>
      {savedCards?.length > 0 ? (
        savedCards?.map((data, index) => (
          <div key={index} style={{marginTop: '50px'}}>
            <Card data={data} />
          </div>
        ))
      ) : (
        <p className={styles.para}>You don't have favorite. Please had cities</p>
      )}
    </div>
  ) : null;
};

export default Favorites;
