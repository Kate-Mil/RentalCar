import axios from "axios";
axios.defaults.baseURL = `https:656656a564fcff8d730eb4ad.mockapi.io/api`;

export const getAdverts = async (page) => {
  const response = await axios.get(`/adverts?page=${page}&limit=12`);
  return response.data;
};

// export const postContact = async ({ name, number }) => {
//   const response = await axios.post(`/contacts`, { name, number });
//   return response.data;
// };

// export const delContact = async (id) => {
//   const response = await axios.delete(`/contacts/${id}`);
//   return response.data;
// };
