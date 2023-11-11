import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  const override = {
    display: "block",
    margin: "0 auto",
  
  };
  return (
    <ClipLoader 
    size={130} 
    color={"#FDB813"} 
    cssOverride={override}
    loading={true} />
  );
};

export default Loader;
