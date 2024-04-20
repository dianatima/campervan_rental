import axios from 'axios';

axios.defaults.baseURL = 'https://661840529a41b1b3dfbc9f9d.mockapi.io/api/v1';

async function fetchAdvertsAPI(page = 1) {
  const res = await axios.get(`adverts?page=${page}&limit=4`);
  console.log('api', res.data);
  return res.data;
}

export default fetchAdvertsAPI;
// export async function addContact({ name, number }) {
//   const res = await axios.post(`/contacts`, { name, number });
//   return res.data;
// }

// export async function deleteContact(contactId) {
//   const res = await axios.delete(`/contacts/${contactId}`);
//   return res.data;
// }
