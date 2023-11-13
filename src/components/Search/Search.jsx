import React, { useState } from "react";
import Card from "../Card/Card";
import "./Search.module.scss";

const Search = ({ setCity, data, loading, display }) => {
  const [valueInput, setValueInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(valueInput);
    setValueInput("");
    setIsValid(true);
  };
  return display ? (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setValueInput(e.target.value)}
          placeholder="Search A City"
          value={valueInput}
        />
      </form>
      {isValid && <Card data={data} loading={loading} />}
      {/* {isValid && data && <Card data={data} loading={loading} />} 
      la data doit etre aussi disponible pour afficher la card
      */} 
    </div>
  ) : null;
};

export default Search;
