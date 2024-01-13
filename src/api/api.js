import axios from 'axios';

// const instance = axios.create({
//   BASE_URL: 'https://pixabay.com/api',
//   params: {
//     key: '40910000-bc8f7501355e0c431b692ba0e',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//   },
// });

// export const searchImg = (q, _page = 1) => {
//   return instance.get('/', {
//     params: {
//       q,
//       _page,
//     },
//   });
// };
async function searchImg(search, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '40910000-bc8f7501355e0c431b692ba0e';

  const { data } = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );
  console.log(data);
  return data;
}
export default searchImg;
