import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyCF01w9O6tSSjMzMXzHunm7DeQgxffbHGA",
  cx: "868703fe9c6624c83",
};

export const fetchDataFromApi = async (payload) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { ...params, ...payload },
    });
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error; // Re-throw the error to handle it elsewhere
  }
};
