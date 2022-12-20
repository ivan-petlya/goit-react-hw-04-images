import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30520048-83f00ec653ef23d160364c39b';
const IMAGES_PER_PAGE = 12;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: IMAGES_PER_PAGE,
};

const fetchPictures = async (query, page) => {
  const config = {
    params: {
      q: query,
      page: page,
    },
  };
  const images = await axios.get('', config);
  return images.data;
};
export default fetchPictures;
