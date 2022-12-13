import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '30520048-83f00ec653ef23d160364c39b',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

async function fetchPictures(query, page) {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
}
export default fetchPictures;
