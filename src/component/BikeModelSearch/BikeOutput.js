import React from "react";

const BikeOutput = ({ data }) => {
  const filteredOutput = data.slice(0, 20);
  return (
    <ul>
      {filteredOutput.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default BikeOutput;
