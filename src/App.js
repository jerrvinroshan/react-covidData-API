import React from "react";
import CovidDisplay from "./pages/CovidDisplay";
import JobSearch from "./pages/JobSearch";
import BikeDisplay from "./pages/BikeDisplay";

const App = () => {
  return (
    <>
      <CovidDisplay />
      <hr />
      <JobSearch />
      <hr />
      <BikeDisplay />
      <hr />
    </>
  );
};

export default App;
