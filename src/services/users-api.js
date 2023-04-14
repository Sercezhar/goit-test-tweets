import axios from 'axios';

axios.defaults.baseURL = 'https://6437e31ec1565cdd4d606a66.mockapi.io';

export async function getUsers() {
  const res = await axios.get('/users');
  const data = res.data;

  return data;
}
