import axios from "axios";

export const fetchJobs = async (params) => {
  const options = {
    method: "GET",
    url: "https://jobs-api14.p.rapidapi.com/v2/list",
    params,
    headers: {
      "x-rapidapi-key": "d1a8420fddmshfe1b7e799c53443p1b5cc0jsnf614d1159571",
      "x-rapidapi-host": "jobs-api14.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.jobs || []);
    return response.data.jobs || [];
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    throw new Error(`${error.message || error.message} `);
  }
};
