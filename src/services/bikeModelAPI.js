import axios from "axios";

const BASE_API_URL =
  "https://motorcycle-specs-database.p.rapidapi.com/model/make-name";

export const fetchBikeModel = async (modelName) => {
  const options = {
    method: "GET",
    url: `${BASE_API_URL}/${modelName}`,
    headers: {
      "x-rapidapi-key": "d1a8420fddmshfe1b7e799c53443p1b5cc0jsnf614d1159571",
      "x-rapidapi-host": "motorcycle-specs-database.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch Bike Model:", error.message);
    throw new Error(`${error.message  || error.message} `);
  }
};
