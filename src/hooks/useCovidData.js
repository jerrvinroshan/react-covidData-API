import { useState } from "react";
import { fetchCovidData } from "../services/covidAPI";

export const useCovidData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const country = document.getElementById("countryInput").value;
    setLoading(true);
    setError(null);

    try {
      const results = await fetchCovidData(country);
      setData(results);
    } catch (err) {
      setError(err.message || "Failed to fetch Covid Data.");
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, fetchData };
};
