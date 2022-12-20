import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '30520048-83f00ec653ef23d160364c39b',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchPictures = async (query, page) => {
  const images = await axios.get(`?q=${query}&page=${page}`);
  return images.data;
};
export default fetchPictures;

fetchPictures.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
