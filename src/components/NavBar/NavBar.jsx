import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faSun} />
        <h1>WeatherApp</h1>

        <nav>
          <NavLink to="/" activeStyle>
            My Location
          </NavLink>
          <NavLink to="/search" activeStyle>
            Search By City
          </NavLink>
          <NavLink to="/favorites" activeStyle>
            My Favorites
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
