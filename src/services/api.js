import axios from 'axios';

const apiFetchImages = (searchQuery, currentPage) => {
  return axios.get(
    `https://pixabay.com/api/?key=20448732-c2abd7c565e4d9afcf8e6024e&q=${searchQuery}&page=${currentPage}&per_page=12`,
  );
};

export default apiFetchImages;
