import axios from 'axios';

axios.defaults.baseURL = 'https://661840529a41b1b3dfbc9f9d.mockapi.io/api/v1';

async function fetchAdvertsAPI(page = 1) {
  const res = await axios.get(`adverts?page=${page}&limit=4`);
  console.log('api', res.data);
  return res.data;
}

export default fetchAdvertsAPI;
