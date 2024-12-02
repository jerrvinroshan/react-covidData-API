import React from "react";

const OutputDisplay = ({ data }) => {
  return (
    <div id="output">
      <h2>Country: {data.country}</h2>
      <p>Confirmed cases: {data.confirmed}</p>
      <p>Recovered cases: {data.recovered}</p>
    </div>
  );
};

export default OutputDisplay;
