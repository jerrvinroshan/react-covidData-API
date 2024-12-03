import React from "react";
import { useBikeModel } from "../hooks/useBikeModel";
import BikeInput from "../component/BikeModelSearch/BikeInput";
import BikeOutput from "../component/BikeModelSearch/BikeOutput";
import "../assets/style.css";

const BikeDisplay = () => {
  const { data, loading, error, fetchModel } = useBikeModel();

  return (
    <div className="BikeModel">
      <h1>Enter Bike Company</h1>
      <div className="BikeModelContainer">
        <div className="BikeData">
        <BikeInput fetchModel={fetchModel} />
        {data && <BikeOutput data={data} />}
        </div>
        <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default BikeDisplay;
