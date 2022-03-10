import axios from "axios";

const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=";
const apiKey = "";
const headers = {
  Authorization: `Bearer ${apiKey}`,
};
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers,
});

export default axiosInstance;
