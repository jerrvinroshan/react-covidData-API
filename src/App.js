import React from "react";
import CountryInput from "./component/CountryInput";
import OutputDisplay from "./component/OutputDisplay";
import { useCovidData } from "./hooks/useCovidData";
import './assets/style.css'
import WeatherComponent from "./hooks/WeatherData";

const App = () => {
  const { data, fetchData } = useCovidData();

  return (
    <>
      <div>
        <h1>COVID-19 Data Fetcher</h1>
        <CountryInput fetchData={fetchData} />
        {data && <OutputDisplay data={data} />}
      </div>
      <WeatherComponent />
      </>
  );
};

export default App;
