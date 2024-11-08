import React from "react";
import CountryInput from "./component/CountryInput";
import OutputDisplay from "./component/OutputDisplay";
import { useCovidData } from "./hooks/useCovidData";
import './assets/style.css'

const App = () => {
  const { data, fetchData } = useCovidData();

  return (
    <div className="MainContainer">
      <h1>COVID-19 Data Fetcher</h1>
      <CountryInput fetchData={fetchData} />
      {data && <OutputDisplay data={data} />}
    </div>
  );
};

export default App;
