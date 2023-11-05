import React, { useState } from "react";
import Card from "./Card/Card";

const Search = ({data, setCity  }) => {
  const [valueInput, setValueInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(valueInput)
    setValueInput('')
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setValueInput(e.target.value)} />
      </form>

      <Card data={data}/>
    </div>
  );
};

export default Search;
