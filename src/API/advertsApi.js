import axios from "axios";
axios.defaults.baseURL = "https://648ca5e48620b8bae7ed3008.mockapi.io";

export const getAdverts = async (page) => {
  const response = await axios.get(`/advert?page=${page}&limit=12`);
  return response.data;
};
