import axios from "axios";

const API_URL = "https://covid-19-data.p.rapidapi.com/country";

export const fetchCovidData = async (country) => {
  const url = `${API_URL}?name=${country}&format=json`;
  const options = {
    headers: {
      "x-rapidapi-key": "d1a8420fddmshfe1b7e799c53443p1b5cc0jsnf614d1159571",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.get(url, options);
    console.log(response.data);
    return response.data[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};