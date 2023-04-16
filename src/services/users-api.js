import axios from 'axios';

axios.defaults.baseURL = 'https://6437e31ec1565cdd4d606a66.mockapi.io';

export async function getUsers() {
  const { data } = await axios.get('/users');

  return data;
}

export async function updateFollowers(id, followers) {
  const { data } = await axios.put(`/users/${id}`, { followers });

  return data;
}
