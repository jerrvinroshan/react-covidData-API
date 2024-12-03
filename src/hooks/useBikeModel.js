import { useState } from "react";
import { fetchBikeModel } from "../services/bikeModelAPI";

export const useBikeModel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchModel = async () => {
    const bikeComapny = document.getElementById("bikeCompany").value;
    setLoading(true);
    setError(null);

    try {
      const results = await fetchBikeModel(bikeComapny);
      setData(results);
    } catch (err) {
      setError(err.message || "Failed to fetch Bike Model.");
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, fetchModel };
};
